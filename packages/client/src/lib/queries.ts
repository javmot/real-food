import { gql } from "@apollo/client";

// FRAGMENTS
const recipeFragments = {
	base: gql`
		fragment RecipeBase on Recipe {
			title
			time
			servings
			category {
				id
				title
			}
			user {
				username
			}
		}
	`,
	info: gql`
		fragment RecipeInfo on Recipe {
			nutritionalInfo {
				alcohol {
					externalId
					name
					quantity
					unit
				}
				calcium {
					externalId
					name
					quantity
					unit
				}
				carbohydrate {
					externalId
					name
					quantity
					unit
				}
				cholesterol {
					externalId
					name
					quantity
					unit
				}
				energy {
					externalId
					name
					quantity
					unit
				}
				fat {
					externalId
					name
					quantity
					unit
				}
				fibre {
					externalId
					name
					quantity
					unit
				}
				iodide {
					externalId
					name
					quantity
					unit
				}
				iron {
					externalId
					name
					quantity
					unit
				}
				magnesium {
					externalId
					name
					quantity
					unit
				}
				monounsaturated {
					externalId
					name
					quantity
					unit
				}
				phosphorus {
					externalId
					name
					quantity
					unit
				}
				polyunsaturated {
					externalId
					name
					quantity
					unit
				}
				potasium {
					externalId
					name
					quantity
					unit
				}
				protein {
					externalId
					name
					quantity
					unit
				}
				saturated {
					externalId
					name
					quantity
					unit
				}
				selenium {
					externalId
					name
					quantity
					unit
				}
				sodium {
					externalId
					name
					quantity
					unit
				}
				sugar {
					externalId
					name
					quantity
					unit
				}
				trans {
					externalId
					name
					quantity
					unit
				}
				vitaminA {
					externalId
					name
					quantity
					unit
				}
				vitaminB1 {
					externalId
					name
					quantity
					unit
				}
				vitaminB12 {
					externalId
					name
					quantity
					unit
				}
				vitaminB2 {
					externalId
					name
					quantity
					unit
				}
				vitaminB3 {
					externalId
					name
					quantity
					unit
				}
				vitaminB6 {
					externalId
					name
					quantity
					unit
				}
				vitaminB9 {
					externalId
					name
					quantity
					unit
				}
				vitaminC {
					externalId
					name
					quantity
					unit
				}
				vitaminD {
					externalId
					name
					quantity
					unit
				}
				vitaminE {
					externalId
					name
					quantity
					unit
				}
				water {
					externalId
					name
					quantity
					unit
				}
				zinc {
					externalId
					name
					quantity
					unit
				}
			}
		}
	`,
	ingredients: gql`
		fragment RecipeIngredients on Recipe {
			ingredients {
				id
				externalId
				name
				quantity
			}
		}
	`,
	steps: gql`
		fragment RecipeSteps on Recipe {
			steps {
				id
				title
				description
			}
		}
	`,
};

// QUERIES

export const RECIPES_IDS_QUERY = gql`
	query Recipes($limit: Int!) {
		recipes(limit: $limit) {
			id
		}
	}
`;

export const RECIPES_QUERY = gql`
	query Recipes($limit: Int, $skip: Int) {
		recipes(limit: $limit, skip: $skip) {
			id
			...RecipeBase
		}
	}
	${recipeFragments.base}
`;

export const RECIPE_QUERY = gql`
	query Recipe($id: String!) {
		recipe(id: $id) {
			id
			...RecipeBase
			...RecipeInfo
			...RecipeIngredients
			...RecipeSteps
		}
	}
	${recipeFragments.base}
	${recipeFragments.info}
	${recipeFragments.ingredients}
	${recipeFragments.steps}
`;

export const CATEGORIES_QUERY = gql`
	query RecipeCategories {
		recipeCategories {
			id
			title
		}
	}
`;

export const GET_FOOD_GROUPS = gql`
	query FoodGroups {
		foodGroups {
			externalId
			name
		}
	}
`;

export const GET_FOOD_GROUP = gql`
	query FoodGroup($input: String!) {
		foodGroup(input: $input) {
			externalId
			name
		}
	}
`;

// MUTATIONS

export const CREATE_RECIPE_MUTATION = gql`
	mutation CreateRecipe($input: CreateRecipeInput!) {
		createRecipe(input: $input) {
			id
			...RecipeBase
			...RecipeInfo
			...RecipeIngredients
			...RecipeSteps
		}
	}
	${recipeFragments.base}
	${recipeFragments.info}
	${recipeFragments.ingredients}
	${recipeFragments.steps}
`;

export const ADD_INGREDIENT_MUTATION = gql`
	mutation AddIngredient($ingredient: IngredientInput!, $id: String!) {
		addIngredient(ingredient: $ingredient, id: $id) {
			id
			...RecipeInfo
			...RecipeIngredients
		}
	}
	${recipeFragments.info}
	${recipeFragments.ingredients}
`;
