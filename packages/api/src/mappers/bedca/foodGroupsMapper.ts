import arrayProxy from "../arrayProxy";
import foodGroupMapper from "./foodGroupMapper";

export default function foodGroupsMapper(
	foodGroupsBedca: Array<any>
): Array<any> {
	return arrayProxy(foodGroupsBedca, foodGroupMapper);
}
