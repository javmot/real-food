import { Resolver, Query, Arg, FieldResolver, ID, Root } from "type-graphql";
import { RecipeStep } from "../entities/RecipeStep";
import { RecipeModel, Recipe } from "../entities/Recipe";

@Resolver((_of) => RecipeStep)
export default class RecipeStepResolver {
	@Query((_returns) => [RecipeStep], { nullable: true })
	async recipeSteps(@Arg("input") recipeId: string) {
		const recipe: Recipe | null = await RecipeModel.findById(recipeId, {
			steps: true,
		})
			.lean()
			.exec();

		return recipe?.steps;
	}

	@FieldResolver((_type) => ID)
	id(@Root() recipeStep: RecipeStep) {
		return recipeStep._id;
	}
}
