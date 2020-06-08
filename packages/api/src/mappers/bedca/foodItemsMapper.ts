import arrayProxy from "../arrayProxy";
import foodItemMapper from "./foodItemMapper";

export default function foodItemsMapper(
	foodItemsBedca: Array<any>
): Array<any> {
	return arrayProxy(foodItemsBedca, foodItemMapper);
}
