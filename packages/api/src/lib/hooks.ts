import { DocumentType } from "@typegoose/typegoose";
import { Recipe } from "../entities/Recipe";

export type HookNextErrorFn = (err?: Error) => void;

export const uniqueIngredients: (
	this: DocumentType<Recipe>,
	next: HookNextErrorFn
) => void = function (next: HookNextErrorFn) {
	const unique: Array<any> = [];
	this.ingredients.forEach((ingredient: any) => {
		if (
			unique.some(
				(storedIngredient) =>
					storedIngredient.externalId === ingredient.externalId
			)
		) {
			return next(new Error("Duplicated sub document!"));
		}

		unique.push(ingredient);
	});

	next();
};
