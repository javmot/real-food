import { assignWith } from "lodash";
import { Ingredient, IngredientModel } from "../entities/Ingredient";
import { NutritionalInfoInterface } from "../entities/NutritionalInfo";
import { NutritionalValue } from "../entities/NutritionalValue";
import {
	RecipeIngredient,
	RecipeIngredientInterface,
} from "../entities/RecipeIngredient";

interface IngredientJoined extends RecipeIngredientInterface {
	ingredientDetails: Ingredient;
}

const isNutritionalValue = (value: any) => {
	return value.externalId !== undefined && value.quantity !== undefined;
};

const mergeNutritionalValues = (ingredientQuantity: number) => (
	obj: any,
	src: NutritionalValue | Array<any>
): NutritionalValue | Array<any> => {
	const memo: any = obj || {};
	return Array.isArray(src)
		? []
		: isNutritionalValue(src)
		? {
				...src,
				quantity:
					(memo.quantity || 0) + (src.quantity * ingredientQuantity) / 100,
		  }
		: src;
};

const buildNutritionalInfo = (
	ingredients: Array<IngredientJoined | null>
): NutritionalInfoInterface | undefined => {
	if (!ingredients.length) return;

	return ingredients.reduce(
		(
			memo: NutritionalInfoInterface | undefined,
			ingredient: IngredientJoined | null
		): NutritionalInfoInterface => {
			return assignWith(
				memo,
				ingredient && ingredient.ingredientDetails.nutritionalInfo,
				mergeNutritionalValues(ingredient ? ingredient.quantity : 0)
			);
		},
		undefined
	);
};

const getIngredientsJoined = (
	ingredients: Array<RecipeIngredient>
): Promise<(IngredientJoined | null)[]> => {
	return Promise.all(
		ingredients.map(
			async (
				ingredient: RecipeIngredient
			): Promise<IngredientJoined | null> => {
				const ingredientDetails: Ingredient | null = await IngredientModel.findById(
					ingredient.details
				)
					.lean()
					.exec();
				return (
					ingredientDetails && {
						...ingredient,
						ingredientDetails,
					}
				);
			}
		)
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
