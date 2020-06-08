import {
	Resolver,
	Arg,
	Query,
	Root,
	Ctx,
	FieldResolver,
	ID,
} from "type-graphql";
import { Ingredient, IngredientModel } from "../entities/Ingredient";
import { Context } from "../config/context";

@Resolver((_of) => Ingredient)
export default class IngredientResolver {
	@Query((_returns) => Ingredient, { nullable: true })
	ingredient(
		@Arg("input") ingredientId: string,
		@Ctx() { dataSources }: Context
	) {
		return dataSources.bedcaAPI.getIngredient(ingredientId);
	}

	@Query((_returns) => [Ingredient], { nullable: true })
	ingredients() {
		return IngredientModel.find().lean().populate("recipes");
	}

	@FieldResolver((_type) => ID)
	id(@Root() ingredient: Ingredient) {
		return ingredient._id;
	}
}
