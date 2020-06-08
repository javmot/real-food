import { Ingredient } from "../../entities/Ingredient";
import { NutritionalInfo } from "../../entities/NutritionalInfo";
import nutritionalInfoMapper from "./nutritionalInfoMapper";

export default function IngredientMapper(
	nutritionalInfoBedca: any
): Ingredient | null {
	if (!nutritionalInfoBedca) return null;

	return {
		get externalId(): string {
			return (
				nutritionalInfoBedca &&
				nutritionalInfoBedca.f_id &&
				nutritionalInfoBedca.f_id[0]
			);
		},

		get name(): string {
			return (
				nutritionalInfoBedca &&
				nutritionalInfoBedca.f_ori_name &&
				nutritionalInfoBedca.f_ori_name[0]
			);
		},

		get nutritionalInfo(): NutritionalInfo {
			return (
				nutritionalInfoBedca &&
				nutritionalInfoMapper(nutritionalInfoBedca.foodvalue)
			);
		},

		get recipes(): Array<any> {
			return [];
		},
	};
}
