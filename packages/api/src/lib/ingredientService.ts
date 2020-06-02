import { RecipeIngredient } from "../entities/RecipeIngredient";
import { Ingredient, IngredientModel } from "../entities/Ingredient";
import { RecipeIngredientInput } from "../inputs/RecipeIngredientInput";
import BedcaAPI from "./BedcaAPI";

const ingredientToRecipeIngredient = (
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
): Promise<RecipeIngredient | null> => {
	const ingredient = await bedcaAPI.getIngredient(ingredientInput.externalId);

	return (
		ingredient &&
		ingredientToRecipeIngredient(
			await IngredientModel.create(ingredient),
			ingredientInput
		)
	);
};

const getIngredientFromDB = async (
	ingredientInput: RecipeIngredientInput
): Promise<RecipeIngredient | null> => {
	const ingredient = await IngredientModel.findOne({
		externalId: ingredientInput.externalId,
	});
	return (
		ingredient && ingredientToRecipeIngredient(ingredient, ingredientInput)
	);
};

export const getIngredient = async (
	ingredientInput: RecipeIngredientInput,
	bedcaApi: BedcaAPI
): Promise<RecipeIngredient> => {
	const ingredient =
		(await getIngredientFromDB(ingredientInput)) ||
		(await getIngredientFromBedca(ingredientInput, bedcaApi));

	if (!ingredient) throw new Error("Ingredient input not valid");

	return ingredient;
};
