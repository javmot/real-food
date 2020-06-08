import { FoodItem } from "../../entities/FoodItem";

export default function foodItemMapper(foodItemBedca: any): FoodItem | null {
	if (!foodItemBedca) return null;

	return {
		get externalId(): string {
			return foodItemBedca && foodItemBedca.f_id && foodItemBedca.f_id[0];
		},

		get name(): string {
			return (
				foodItemBedca && foodItemBedca.f_ori_name && foodItemBedca.f_ori_name[0]
			);
		},
	};
}
