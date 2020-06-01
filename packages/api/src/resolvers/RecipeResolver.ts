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
import { Ingredient, IngredientModel } from "../entities/Ingredient";
import { CreateRecipeInput } from "../inputs/RecipeInput";
import { Context } from "../config/context";
import BedcaAPI from "../lib/BedcaAPI";
import { RecipeIngredientInput } from "../inputs/RecipeIngredientInput";
import { PaginationArgs } from "./PaginationArgs";
import { RecipeIngredient } from "../entities/RecipeIngredient";

const ADD = true;
const REMOVE = false;

// const parseFoodValues = (ingredient: RecipeIngredientInput, add: boolean) => (
// 	values: Array<any>
// ) => {
// 	const operator = add ? 1 : -1;
// 	return values.map((value) => ({
// 		...value,
// 		total: operator * ((value.total * ingredient.quantity) / 100),
// 	}));
// };

const parseIngredient = (
	ingredient: Ingredient,
	ingredientInput: RecipeIngredientInput
): RecipeIngredient => ({
	externalId: ingredient.externalId,
	name: ingredient.name,
	quantity: ingredientInput.quantity,
	details: ingredient._id,
});

const getIngredientFromBedca = async (
	ingredientInput: RecipeIngredientInput,
	bedcaAPI: BedcaAPI
): Promise<RecipeIngredient> => {
	const ingredient = await bedcaAPI.getIngredient(ingredientInput.externalId);
	return parseIngredient(
		await IngredientModel.create(ingredient),
		ingredientInput
	);
};

const getIngredient = async (
	ingredientInput: RecipeIngredientInput,
	bedcaApi: BedcaAPI
) => {
	const ingredient = await IngredientModel.findOne({
		externalId: ingredientInput.externalId,
	});
	if (ingredient) return parseIngredient(ingredient, ingredientInput);

	return getIngredientFromBedca(ingredientInput, bedcaApi);
};

const updateIngredient = async (
	id: string,
	ingredient: RecipeIngredientInput,
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
	async addIngredient(
		@Arg("id") id: string,
		@Arg("ingredient") ingredientInput: RecipeIngredientInput,
		@Ctx() ctx: Context
	) {
		return updateIngredient(
			id,
			await getIngredient(ingredientInput, ctx.dataSources.bedcaAPI),
			ADD
		);
	}

	@Mutation((_returns) => Recipe, { nullable: true })
	removeIngredient(
		@Arg("id") id: string,
		@Arg("ingredient") ingredient: RecipeIngredientInput
	) {
		return updateIngredient(id, ingredient, REMOVE);
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

// function mergeFoodValues(foodValues: any) {
// 	const totalReducer = (memo: any, value: any) => {
// 		return {
// 			...memo,
// 			total: memo.total + value.total,
// 		};
// 	};
// 	const grouped = groupBy(foodValues, (value) => value.externalId);

// 	return map(grouped, (group) => {
// 		return group.reduce(totalReducer, {
// 			externalId: group[0].externalId,
// 			name: group[0].name,
// 			unit: group[0].unit,
// 			total: 0,
// 		});
// 	});
// }

// function requestIngredientValues(
// 	ingredient: RecipeIngredientInput,
// 	add: boolean,
// 	bedcaApi: BedcaAPI
// ) {
// 	return bedcaApi
// 		.getFood(ingredient.externalId)
// 		.then((foodInfo) => (foodInfo ? foodInfo.foodValues : []))
// 		.then(parseFoodValues(ingredient, add));
// }
