import { RecipeInterface } from "../../config/interfaces";
import { InfoSummaryData } from "../InfoSummary";
import { getCalories } from "../../lib/utils";

const parseCalories: (arg: Array<any>) => InfoSummaryData | undefined = (
	foodValues = []
) => {
	const calories = getCalories(foodValues);

	if (calories) {
		return {
			count: `${calories.total}`,
			measure: "calorias",
		};
	}
};

const parseTime: (arg: string) => InfoSummaryData = (time = "") => {
	return {
		count: time.split(" ")[0],
		measure: "minutos",
	};
};

const parseServings: (arg: number) => InfoSummaryData = (servings) => {
	return {
		count: `${servings}`,
		measure: "raciones",
	};
};

export const getInfoSummaryProps: (
	arg: RecipeInterface
) => InfoSummaryData[] = (recipe) =>
	[
		parseCalories(recipe.info.foodValues),
		parseTime(recipe.time),
		parseServings(recipe.servings),
	].filter(Boolean);
