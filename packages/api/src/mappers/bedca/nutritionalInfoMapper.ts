import { groupBy } from "lodash";
import { NutritionalInfo } from "../../entities/NutritionalInfo";
import nutritionalValueMapper from "./nutritionalValueMapper";
import { NutritionalValue } from "../../entities/NutritionalValue";
import {
	ENERGY_ID,
	FAT_ID,
	PROTEIN_ID,
	CARBOHYDRATE_ID,
	FIBRE_ID,
	WATER_ID,
	ALCOHOL_ID,
	SUGAR_ID,
	MONOUNSATURATED_ID,
	POLYUNSATURATED_ID,
	SATURATED_ID,
	CHOLESTEROL_ID,
	TRANS_ID,
	VITAMIN_B1_ID,
	VITAMIN_A_ID,
	VITAMIN_D_ID,
	VITAMIN_E_ID,
	VITAMIN_B9_ID,
	VITAMIN_B3_ID,
	VITAMIN_B2_ID,
	VITAMIN_B12_ID,
	VITAMIN_B6_ID,
	VITAMIN_C_ID,
	CALCIUM_ID,
	IRON_ID,
	POTASIUM_ID,
	MAGNESIUM_ID,
	SODIUM_ID,
	PHOSPHORUS_ID,
	IODIDE_ID,
	SELENIUM_ID,
	ZINC_ID,
} from "../../config/constants";

const defaultValue = (id: string): NutritionalValue => ({
	externalId: id,
	name: "",
	quantity: 0,
	unit: "",
});

const getNutritionalValue = (
	groupedValues: any,
	id: string
): NutritionalValue =>
	groupedValues[id]
		? nutritionalValueMapper(groupedValues[id])
		: defaultValue(id);

export default function nutritionalInfoMapper(
	foodValuesBedca: any
): NutritionalInfo {
	const groupedValues = groupBy(foodValuesBedca, (value) => value.c_id[0]);

	return {
		get energy(): NutritionalValue {
			return getNutritionalValue(groupedValues, ENERGY_ID);
		},

		get fat(): NutritionalValue {
			return getNutritionalValue(groupedValues, FAT_ID);
		},

		get protein(): NutritionalValue {
			return getNutritionalValue(groupedValues, PROTEIN_ID);
		},

		get carbohydrate(): NutritionalValue {
			return getNutritionalValue(groupedValues, CARBOHYDRATE_ID);
		},

		get fibre(): NutritionalValue {
			return getNutritionalValue(groupedValues, FIBRE_ID);
		},

		get water(): NutritionalValue {
			return getNutritionalValue(groupedValues, WATER_ID);
		},

		get alcohol(): NutritionalValue {
			return getNutritionalValue(groupedValues, ALCOHOL_ID);
		},

		get sugar(): NutritionalValue {
			return getNutritionalValue(groupedValues, SUGAR_ID);
		},

		get monounsaturated(): NutritionalValue {
			return getNutritionalValue(groupedValues, MONOUNSATURATED_ID);
		},

		get polyunsaturated(): NutritionalValue {
			return getNutritionalValue(groupedValues, POLYUNSATURATED_ID);
		},

		get saturated(): NutritionalValue {
			return getNutritionalValue(groupedValues, SATURATED_ID);
		},

		get cholesterol(): NutritionalValue {
			return getNutritionalValue(groupedValues, CHOLESTEROL_ID);
		},

		get trans(): NutritionalValue {
			return getNutritionalValue(groupedValues, TRANS_ID);
		},

		get vitaminA() {
			return getNutritionalValue(groupedValues, VITAMIN_A_ID);
		},

		get vitaminD() {
			return getNutritionalValue(groupedValues, VITAMIN_D_ID);
		},

		get vitaminE() {
			return getNutritionalValue(groupedValues, VITAMIN_E_ID);
		},

		get vitaminB9() {
			return getNutritionalValue(groupedValues, VITAMIN_B9_ID);
		},

		get vitaminB3() {
			return getNutritionalValue(groupedValues, VITAMIN_B3_ID);
		},

		get vitaminB2() {
			return getNutritionalValue(groupedValues, VITAMIN_B2_ID);
		},

		get vitaminB1() {
			return getNutritionalValue(groupedValues, VITAMIN_B1_ID);
		},

		get vitaminB12() {
			return getNutritionalValue(groupedValues, VITAMIN_B12_ID);
		},

		get vitaminB6() {
			return getNutritionalValue(groupedValues, VITAMIN_B6_ID);
		},

		get vitaminC() {
			return getNutritionalValue(groupedValues, VITAMIN_C_ID);
		},

		get calcium() {
			return getNutritionalValue(groupedValues, CALCIUM_ID);
		},

		get iron() {
			return getNutritionalValue(groupedValues, IRON_ID);
		},

		get potasium() {
			return getNutritionalValue(groupedValues, POTASIUM_ID);
		},

		get magnesium() {
			return getNutritionalValue(groupedValues, MAGNESIUM_ID);
		},

		get sodium() {
			return getNutritionalValue(groupedValues, SODIUM_ID);
		},

		get phosphorus() {
			return getNutritionalValue(groupedValues, PHOSPHORUS_ID);
		},

		get iodide() {
			return getNutritionalValue(groupedValues, IODIDE_ID);
		},

		get selenium() {
			return getNutritionalValue(groupedValues, SELENIUM_ID);
		},

		get zinc() {
			return getNutritionalValue(groupedValues, ZINC_ID);
		},
	};
}
