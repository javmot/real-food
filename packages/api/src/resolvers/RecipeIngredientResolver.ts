import { Resolver, FieldResolver, Root, ID } from "type-graphql";
import { RecipeIngredient } from "../entities/RecipeIngredient";

@Resolver((_of) => RecipeIngredient)
export default class RecipeIngredientResolver {
	@FieldResolver((_type) => ID)
	id(@Root() recipeIngredient: RecipeIngredient) {
		return recipeIngredient._id;
	}
}
