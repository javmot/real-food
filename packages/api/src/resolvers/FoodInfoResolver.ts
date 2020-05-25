import { Resolver, Arg, Query, Ctx } from "type-graphql";
import { FoodInfo } from "../entities/FoodInfo";
import { Context } from "../config/context";

@Resolver((_of) => FoodInfo)
export default class FoodInfoResolver {
	@Query((_returns) => FoodInfo, { nullable: true })
	foodInfo(@Arg("input") foodId: string, @Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFood(foodId);
	}
}
