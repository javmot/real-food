import {
	IngredientInterface,
	IngredientFormData,
} from "../../config/interfaces";

export const onSubmitIngredient = (
	recipeId: string | string[],
	addIngredientMutation: (options?: any) => void
) => (ingredients: IngredientInterface[] = []) => (
	formData: IngredientFormData
) => {
	const ingredientSelected = ingredients.find(
		(ingredient) => ingredient.externalId === formData.ingredientId
	);
	if (ingredientSelected) {
		addIngredientMutation({
			variables: {
				id: recipeId,
				ingredient: {
					externalId: ingredientSelected.externalId,
					name: ingredientSelected.name,
					quantity: parseFloat(formData.quantity),
				},
			},
		});
	}
};
