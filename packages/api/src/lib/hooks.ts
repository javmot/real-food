import { DocumentType } from "@typegoose/typegoose";
import { Recipe } from "../entities/Recipe";
import { IngredientModel, Ingredient } from "../entities/Ingredient";
import { RecipeIngredient } from "../entities/RecipeIngredient";
import { buildNutritionalInfo } from "./nutritionalInfoService";

export type HookNextErrorFn = (err?: Error) => void;
export type HookNextEmptyFn = () => void;
export type PreHookFn<T> = (
	this: DocumentType<T>,
	next: HookNextErrorFn
) => void;
export type PostSingleFn<T> = (
	result: DocumentType<T>,
	next: HookNextEmptyFn
) => void;

export const updateNutritionalInfo: PreHookFn<Recipe> = function (
	next: HookNextErrorFn
) {
	if (!this.isModified("ingredients")) return next();

	Promise.all(
		this.ingredients.map(
			(ingredient: RecipeIngredient): Promise<Ingredient | null> =>
				IngredientModel.findById(ingredient.details).lean().exec()
		)
	)
		.then((ingredients: any) => {
			this.nutritionalInfo = buildNutritionalInfo(ingredients.filter(Boolean));
			next();
		})
		.catch(next);
};

export const uniqueIngredients: PreHookFn<Recipe> = function (
	next: HookNextErrorFn
) {
	if (!this.isModified("ingredients")) return next();

	const unique: Array<any> = [];
	this.ingredients.forEach((ingredient: any) => {
		if (
			unique.some(
				(storedIngredient) =>
					storedIngredient.externalId === ingredient.externalId
			)
		) {
			return next(new Error("Duplicated Ingredient"));
		}

		unique.push(ingredient);
	});

	next();
};
