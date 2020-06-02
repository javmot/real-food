import { groupBy } from "lodash";
import { NutritionalInfoInterface } from "../../entities/NutritionalInfo";
import arrayProxy from "../arrayProxy";
import nutritionalValueMapper from "./nutritionalValueMapper";
import { NutritionalValueInterface } from "../../entities/NutritionalValue";
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
	VITAMINS_ID,
	MINERALS_ID,
} from "../../config/constants";

const defaultValue = (id: string): NutritionalValueInterface => ({
	externalId: id,
	name: "",
	quantity: 0,
	unit: "",
});

const getNutritionalValue = (
	groupedValues: any,
	id: string
): NutritionalValueInterface =>
	groupedValues[id]
		? nutritionalValueMapper(groupedValues[id])
		: defaultValue(id);

export default function nutritionalInfoMapper(
	foodValuesBedca: any
): NutritionalInfoInterface {
	const groupedValues = groupBy(foodValuesBedca, (value) => value.c_id[0]);

	return {
		get energy(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, ENERGY_ID);
		},

		get fat(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, FAT_ID);
		},

		get protein(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, PROTEIN_ID);
		},

		get carbohydrate(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, CARBOHYDRATE_ID);
		},

		get fibre(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, FIBRE_ID);
		},

		get water(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, WATER_ID);
		},

		get alcohol(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, ALCOHOL_ID);
		},

		get sugar(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, SUGAR_ID);
		},

		get monounsaturated(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, MONOUNSATURATED_ID);
		},

		get polyunsaturated(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, POLYUNSATURATED_ID);
		},

		get saturated(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, SATURATED_ID);
		},

		get cholesterol(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, CHOLESTEROL_ID);
		},

		get trans(): NutritionalValueInterface {
			return getNutritionalValue(groupedValues, TRANS_ID);
		},

		get vitamins(): Array<NutritionalValueInterface> {
			return arrayProxy(
				foodValuesBedca.filter(
					(value: any) => value.componentgroup_id[0] === VITAMINS_ID
				),
				nutritionalValueMapper
			);
		},

		get minerals(): Array<NutritionalValueInterface> {
			return arrayProxy(
				foodValuesBedca.filter(
					(value: any) => value.componentgroup_id[0] === MINERALS_ID
				),
				nutritionalValueMapper
			);
		},
	};
}
