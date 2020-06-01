import { IngredientInterface } from "../entities/Ingredient";
import { NutritionalInfoInterface } from "../entities/NutritionalInfo";
import nutritionalInfoProxy from "./nutritionalInfoProxy";

export default function nutritionalValueProxy(
	nutritionalInfoBedca: any
): IngredientInterface {
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

		get nutritionalInfo(): NutritionalInfoInterface {
			return (
				nutritionalInfoBedca &&
				nutritionalInfoProxy(nutritionalInfoBedca.foodvalue)
			);
		},
	};
}
