import { assignWith } from "lodash";
import { Ingredient } from "../entities/Ingredient";
import { NutritionalInfo } from "../entities/NutritionalInfo";
import { RecipeIngredient } from "../entities/RecipeIngredient";
import { NutritionalValue } from "../entities/NutritionalValue";
import { isDocument } from "@typegoose/typegoose";

export interface IngredientJoined {
	quantity: number;
	ingredientDetails: Ingredient;
}

export const isNutritionalValue = (value: any) =>
	value && value.externalId !== undefined && value.quantity !== undefined;

export const accumulateQuantity = (
	accummulate: number,
	nutritionalQuantity: number,
	ingredientQuantity: number
): number => accummulate + (nutritionalQuantity * ingredientQuantity) / 100;

export const buildNutritionalValue = (
	memo: NutritionalValue | undefined,
	newValue: NutritionalValue,
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
) =>
	isNutritionalValue(newValue)
		? buildNutritionalValue(memo, newValue, ingredientQuantity)
		: newValue;

export const buildNutritionalInfo = (
	ingredients: Array<RecipeIngredient>
): NutritionalInfo | undefined =>
	ingredients.reduce(
		(
			memo: NutritionalInfo | undefined,
			ingredient: RecipeIngredient
		): NutritionalInfo | undefined =>
			isDocument(ingredient.details)
				? assignWith(
						memo,
						ingredient.details.nutritionalInfo,
						mergeNutritionalValues(ingredient.quantity)
				  )
				: memo,
		undefined
	);
