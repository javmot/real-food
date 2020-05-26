import { CALORIES } from "../config/constants";

export const getCalories = (foodValues = []) =>
	foodValues.find((value) => value.externalId === CALORIES);
