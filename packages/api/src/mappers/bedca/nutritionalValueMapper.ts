import { NutritionalValue } from "../../entities/NutritionalValue";

export default function nutritionalValueMapper(
	nutritionalValueBedca: any
): NutritionalValue {
	const value = Array.isArray(nutritionalValueBedca)
		? nutritionalValueBedca[0]
		: nutritionalValueBedca;

	return {
		get externalId(): string {
			return value && value.c_id && value.c_id[0];
		},

		get name(): string {
			return value && value.c_ori_name && value.c_ori_name[0];
		},

		get unit(): string {
			return value && value.v_unit && value.v_unit[0];
		},

		get quantity(): number {
			return (
				(value && value.best_location && parseFloat(value.best_location[0])) ||
				0
			);
		},
	};
}
