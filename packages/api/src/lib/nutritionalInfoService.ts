import { assignWith } from "lodash";
import { Ingredient } from "../entities/Ingredient";
import { NutritionalInfoInterface } from "../entities/NutritionalInfo";
import { RecipeIngredient } from "../entities/RecipeIngredient";
import { NutritionalValueInterface } from "../entities/NutritionalValue";
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
) =>
	isNutritionalValue(newValue)
		? buildNutritionalValue(memo, newValue, ingredientQuantity)
		: newValue;

export const buildNutritionalInfo = (
	ingredients: Array<RecipeIngredient>
): NutritionalInfoInterface | undefined =>
	ingredients.reduce(
		(
			memo: NutritionalInfoInterface | undefined,
			ingredient: RecipeIngredient
		): NutritionalInfoInterface | undefined =>
			isDocument(ingredient.details)
				? assignWith(
						memo,
						ingredient.details.nutritionalInfo,
						mergeNutritionalValues(ingredient.quantity)
				  )
				: memo,
		undefined
	);
