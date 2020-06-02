import { RESTDataSource } from "apollo-datasource-rest";
import { parseStringPromise } from "xml2js";
import { getGroupsQuery, getGroupQuery, getFoodQuery } from "./xmlQueries";
import foodItemsMapper from "../mappers/bedca/foodItemsMapper";
import foodGroupsMapper from "../mappers/bedca/foodGroupsMapper";
import ingredientMapper from "../mappers/bedca/ingredientMapper";
import { log } from "./utils";

const headers = {
	"content-type": "text/xml",
};

const parseResponse = (response: any): any => {
	return response.foodresponse.food;
};

export default class BedcaAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://www.bedca.net/bdpub";
	}

	getFoodGroups() {
		return this.post("procquery.php", getGroupsQuery(), { headers })
			.then(parseStringPromise)
			.then(parseResponse)
			.then(foodGroupsMapper);
	}

	getFoodGroup(groupId: string) {
		return this.post("procquery.php", getGroupQuery(groupId), { headers })
			.then(parseStringPromise)
			.then(parseResponse)
			.then(foodItemsMapper);
	}

	getIngredient(foodId: string) {
		return this.post("procquery.php", getFoodQuery(foodId), { headers })
			.then(parseStringPromise)
			.then(parseResponse)
			.then((food) => food[0])
			.then(log)
			.then(ingredientMapper);
	}
}
