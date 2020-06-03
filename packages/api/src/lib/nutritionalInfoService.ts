import { assignWith } from "lodash";
import { Ingredient, IngredientModel } from "../entities/Ingredient";
import { NutritionalInfoInterface } from "../entities/NutritionalInfo";
import { RecipeIngredient } from "../entities/RecipeIngredient";
import { NutritionalValueInterface } from "../entities/NutritionalValue";

export interface IngredientJoined {
	quantity: number;
	ingredientDetails: Ingredient;
}

export const isNutritionalValue = (value: any) => {
	return (
		value && value.externalId !== undefined && value.quantity !== undefined
	);
};

export const accumulateQuantity = (
	accummulate: number,
	nutritionalQuantity: number,
	ingredientQuantity: number
): number => accummulate + (nutritionalQuantity * ingredientQuantity) / 100;

export const buildNutritionalValue = (
	memo: NutritionalValueInterface | undefined,
	newValue: NutritionalValueInterface,
	ingredientQuantity: number
) => ({
	...newValue,
	quantity: accumulateQuantity(
		memo?.quantity || 0,
		newValue.quantity,
		ingredientQuantity
	),
});

export const mergeNutritionalValues = (ingredientQuantity: number) => (
	memo: any,
	newValue: any
) => {
	return isNutritionalValue(newValue)
		? buildNutritionalValue(memo, newValue, ingredientQuantity)
		: newValue;
};

export const buildNutritionalInfo = (
	ingredients: Array<IngredientJoined | null>
): NutritionalInfoInterface | undefined => {
	return ingredients.reduce(
		(
			memo: NutritionalInfoInterface | undefined,
			ingredient: IngredientJoined | null
		): NutritionalInfoInterface | undefined => {
			return assignWith(
				memo,
				ingredient?.ingredientDetails.nutritionalInfo,
				mergeNutritionalValues(ingredient?.quantity || 0)
			);
		},
		undefined
	);
};

export const getIngredientsJoined = (
	ingredients: Array<RecipeIngredient>
): Promise<(IngredientJoined | null)[]> => {
	return Promise.all(
		ingredients.map(async (ingredient: RecipeIngredient) => {
			const ingredientDetails = await IngredientModel.findById(
				ingredient.details
			)
				.lean()
				.exec();
			return (
				ingredientDetails && {
					quantity: ingredient.quantity,
					ingredientDetails,
				}
			);
		})
	);
};

export const getNutritionalInfoByIngredients = async (
	ingredients: Array<RecipeIngredient>
): Promise<NutritionalInfoInterface | undefined> => {
	const ingredientsJoined: Array<IngredientJoined | null> = await getIngredientsJoined(
		ingredients
	);

	return buildNutritionalInfo(ingredientsJoined);
};
