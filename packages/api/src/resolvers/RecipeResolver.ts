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
import { RecipeIngredientInput } from "../inputs/RecipeIngredientInput";
import { PaginationArgs } from "./PaginationArgs";
import { getIngredient } from "../lib/ingredientService";

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
		const recipe = await findRecipe(id);

		recipe.ingredients.push(
			await getIngredient(ingredientInput, ctx.dataSources.bedcaAPI)
		);

		return recipe.save();
	}

	@Mutation((_returns) => Recipe, { nullable: true })
	async removeIngredient(
		@Arg("id") id: string,
		@Arg("ingredient") ingredient: RecipeIngredientInput
	) {
		const recipe = await findRecipe(id);

		recipe.ingredients = recipe.ingredients.filter((i) => {
			return i.externalId !== ingredient.externalId;
		});

		return recipe.save();
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

const findRecipe = async (id: string) => {
	const recipe = await RecipeModel.findOne({
		_id: id,
		// TODO: user,
	});
	if (!recipe) throw new Error("Recipe not found");

	return recipe;
};
