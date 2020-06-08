import {
	Resolver,
	Mutation,
	Query,
	Arg,
	FieldResolver,
	Root,
	ID,
} from "type-graphql";
import {
	RecipeCategory,
	RecipeCategoryModel,
} from "../entities/RecipeCategory";
import { CreateRecipeCategoryInput } from "../inputs/RecipeCategoryInput";
import { notNullableCollection } from "../lib/utils";

@Resolver((_of) => RecipeCategory)
export default class RecipeCategoryResolver {
	@Query((_returns) => [RecipeCategory], { nullable: false })
	recipeCategories() {
		return RecipeCategoryModel.find().lean().exec().then(notNullableCollection);
	}

	@Mutation((_returns) => RecipeCategory, { nullable: false })
	async createRecipeCategory(
		@Arg("input") categoryInput: CreateRecipeCategoryInput
	) {
		return RecipeCategoryModel.create(categoryInput);
	}

	@FieldResolver((_type) => ID)
	id(@Root() recipeCategory: RecipeCategory) {
		return recipeCategory._id;
	}
}
