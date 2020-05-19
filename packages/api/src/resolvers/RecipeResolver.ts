import { groupBy, map } from "lodash";
import {
	Resolver,
	Arg,
	Query,
	Mutation,
	Ctx,
	FieldResolver,
	Root,
	Args,
} from "type-graphql";
import { Recipe, RecipeModel } from "../entities/Recipe";
import {
	RecipeCategory,
	RecipeCategoryModel,
} from "../entities/RecipeCategory";
import { User, UserModel } from "../entities/User";
import { CreateRecipeInput } from "../inputs/RecipeInput";
import { Context } from "../config/context";
import BedcaAPI from "../dataSources/BedcaAPI";
import { IngredientInput } from "../inputs/IngredientInput";
import { PaginationArgs } from "./PaginationArgs";

const ADD = true;
const REMOVE = false;

const parseFoodValues = (ingredient: IngredientInput, add: boolean) => (
	values: Array<any>
) => {
	const operator = add ? 1 : -1;
	return values.map((value) => ({
		...value,
		total: operator * ((value.total * ingredient.quantity) / 100),
	}));
};

const updateIngredient = async (
	id: string,
	ingredient: IngredientInput,
	{ dataSources }: Context,
	add: boolean = ADD
) => {
	const recipe = await RecipeModel.findOne({
		_id: id,
		// TODO: user,
	});
	if (!recipe) return null;

	recipe.ingredients = add
		? [...recipe.ingredients, ingredient]
		: recipe.ingredients.filter((i) => {
				return i.externalId !== ingredient.externalId;
		  });

	await recipe.save();

	const { foodValues } = recipe.info;
	const ingredientFoodValues = await requestIngredientValues(
		ingredient,
		add,
		dataSources.bedcaAPI
	);
	const newFoodValues = mergeFoodValues([
		...foodValues,
		...ingredientFoodValues,
	]);

	recipe.info.foodValues = newFoodValues;

	return recipe.save();
};

@Resolver((_of) => Recipe)
export default class RecipeResolver {
	@Query((_returns) => [Recipe], { nullable: false })
	recipes(@Args() { skip, limit }: PaginationArgs) {
		return RecipeModel.find()
			.sort([["updatedAt", -1]])
			.skip(skip)
			.limit(limit)
			.exec();
	}

	@Query((_returns) => Recipe, { nullable: true })
	recipe(@Arg("id") id: string) {
		return RecipeModel.findById(id).exec();
	}

	@Query((_returns) => Recipe, { nullable: true })
	async recipeByUserAndTitle(
		@Arg("username") username: string,
		@Arg("title") title: string
	) {
		const user = await UserModel.findOne({
			username,
		});

		if (user) {
			return RecipeModel.findOne({
				userId: user._id,
				title,
			}).exec();
		}

		return null;
	}

	@Query((_returns) => [Recipe], { nullable: false })
	recipesByCategory(@Arg("input") categoryId: string) {
		return RecipeModel.find({ category_id: categoryId }).exec();
	}

	@Mutation((_returns) => Recipe, { nullable: false })
	async createRecipe(
		@Arg("input") recipeInput: CreateRecipeInput,
		@Ctx() { user }: Context
	) {
		return RecipeModel.create({
			...recipeInput,
			userId: user,
			info: { name: recipeInput.title, foodValues: [] },
		});
	}

	@Mutation((_returns) => Recipe, { nullable: true })
	addIngredient(
		@Arg("id") id: string,
		@Arg("ingredient") ingredient: IngredientInput,
		@Ctx() ctx: Context
	) {
		return updateIngredient(id, ingredient, ctx, ADD);
	}

	@Mutation((_returns) => Recipe, { nullable: true })
	removeIngredient(
		@Arg("id") id: string,
		@Arg("ingredient") ingredient: IngredientInput,
		@Ctx() ctx: Context
	) {
		return updateIngredient(id, ingredient, ctx, REMOVE);
	}

	@FieldResolver((_type) => RecipeCategory)
	category(@Root() recipe: any) {
		return RecipeCategoryModel.findById(recipe.categoryId);
	}

	@FieldResolver((_type) => User)
	user(@Root() recipe: any) {
		return UserModel.findById(recipe.userId);
	}
}

function mergeFoodValues(foodValues: any) {
	const totalReducer = (memo: any, value: any) => {
		return {
			...memo,
			total: memo.total + value.total,
		};
	};
	const grouped = groupBy(foodValues, (value) => value.externalId);

	return map(grouped, (group) => {
		return group.reduce(totalReducer, {
			externalId: group[0].externalId,
			name: group[0].name,
			unit: group[0].unit,
			total: 0,
		});
	});
}

function requestIngredientValues(
	ingredient: IngredientInput,
	add: boolean,
	bedcaApi: BedcaAPI
) {
	return bedcaApi
		.getFood(ingredient.externalId)
		.then((foodInfo) => (foodInfo ? foodInfo.foodValues : []))
		.then(parseFoodValues(ingredient, add));
}
