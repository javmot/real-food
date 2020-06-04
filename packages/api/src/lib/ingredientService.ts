import { DocumentType, isRefType } from "@typegoose/typegoose";
import { RecipeIngredientInterface } from "../entities/RecipeIngredient";
import { Ingredient, IngredientModel } from "../entities/Ingredient";
import { RecipeIngredientInput } from "../inputs/RecipeIngredientInput";
import BedcaAPI from "./BedcaAPI";
import { Recipe } from "../entities/Recipe";

export const ingredientToRecipeIngredient = (
	ingredient: DocumentType<Ingredient>,
	ingredientInput: RecipeIngredientInput
): RecipeIngredientInterface => ({
	externalId: ingredient.externalId,
	name: ingredient.name,
	quantity: ingredientInput.quantity,
	details: ingredient._id,
});

export const getIngredientFromBedca = async (
	ingredientInput: RecipeIngredientInput,
	bedcaAPI: BedcaAPI
): Promise<DocumentType<Ingredient> | null> => {
	const ingredient = await bedcaAPI.getIngredient(ingredientInput.externalId);

	return ingredient && IngredientModel.create(ingredient);
};

export const getIngredientFromDB = async (
	ingredientInput: RecipeIngredientInput
): Promise<DocumentType<Ingredient> | null> => {
	return IngredientModel.findOne({
		externalId: ingredientInput.externalId,
	});
};

export const getIngredient = async (
	ingredientInput: RecipeIngredientInput,
	bedcaApi: BedcaAPI
): Promise<DocumentType<Ingredient>> => {
	const ingredient =
		(await getIngredientFromDB(ingredientInput)) ||
		(await getIngredientFromBedca(ingredientInput, bedcaApi));

	if (!ingredient) throw new Error("Ingredient input not valid");

	return ingredient;
};

export const addRecipeToIngredient = async (
	ingredientQuery: Promise<DocumentType<Ingredient> | null>,
	recipe: Recipe
) => {
	const ingredient = await ingredientQuery;
	if (ingredient) {
		ingredient.recipes.push(recipe._id);
		ingredient.save();
	}
};

export const removeRecipeFromIngredient = async (
	ingredientQuery: Promise<DocumentType<Ingredient> | null>,
	recipe: Recipe
) => {
	const ingredient = await ingredientQuery;
	if (ingredient) {
		ingredient.recipes = ingredient.recipes.filter((ingredientRecipe) => {
			if (isRefType(ingredientRecipe)) {
				return !recipe._id.equals(ingredientRecipe);
			}
			return true;
		});
		ingredient.save();
	}
};
