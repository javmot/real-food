import { Recipe, NutritionalValue } from "@real-food/api";
import { InfoSummaryData } from "../InfoSummary";

const parseCalories = (calories: NutritionalValue): InfoSummaryData => {
	if (calories) {
		return {
			count: `${Math.round(calories.quantity)}`,
			measure: "calorias",
		};
	}
};

const parseTime = (time: number = 0): InfoSummaryData => {
	return {
		count: `${time}`,
		measure: "minutos",
	};
};

const parseServings: (arg: number) => InfoSummaryData = (servings) => {
	return {
		count: `${servings}`,
		measure: "raciones",
	};
};

export const getInfoSummaryProps: (arg: Recipe) => InfoSummaryData[] = (
	recipe
) =>
	[
		parseCalories(recipe.nutritionalInfo.energy),
		parseTime(recipe.time),
		parseServings(recipe.servings),
	].filter(Boolean);
