import { Resolver, Arg, Query, Ctx } from "type-graphql";
import { Ingredient } from "../entities/Ingredient";
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
}
