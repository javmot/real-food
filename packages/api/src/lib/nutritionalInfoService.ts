import { tail, assignWith } from "lodash";
import { Ingredient } from "../entities/Ingredient";
import { NutritionalInfoInterface } from "../entities/NutritionalInfo";
import { NutritionalValue } from "../entities/NutritionalValue";

const isNutritionalValue = (value: any) => {
	return value.externalId !== undefined && value.quantity !== undefined;
};

const mergeNutritionalValues = (
	obj: any,
	src: any
): NutritionalValue | Array<any> => {
	return Array.isArray(src) || Array.isArray(obj)
		? []
		: isNutritionalValue(src) && isNutritionalValue(obj)
		? {
				...src,
				quantity: src.quantity + obj.quantity,
		  }
		: src;
};

export const buildNutritionalInfo = (
	ingredients: Array<Ingredient>
): NutritionalInfoInterface | undefined => {
	if (!ingredients.length) return;
	if (ingredients.length === 1) return ingredients[0].nutritionalInfo;

	return tail(ingredients).reduce(
		(
			memo: NutritionalInfoInterface,
			ingredient: Ingredient
		): NutritionalInfoInterface =>
			assignWith(memo, ingredient.nutritionalInfo, mergeNutritionalValues),
		ingredients[0].nutritionalInfo
	);
};
