import { FoodGroup } from "../../entities/FoodGroup";

export default function foodGroupMapper(foodGroupBedca: any): FoodGroup | null {
	if (!foodGroupBedca) return null;

	return {
		get externalId(): string {
			return foodGroupBedca && foodGroupBedca.fg_id && foodGroupBedca.fg_id[0];
		},

		get name(): string {
			return (
				foodGroupBedca &&
				foodGroupBedca.fg_ori_name &&
				foodGroupBedca.fg_ori_name[0]
			);
		},
	};
}
