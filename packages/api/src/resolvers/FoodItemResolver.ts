import { Resolver, Arg, Query, Ctx } from "type-graphql";
import { FoodItem } from "../entities/FoodItem";
import { Context } from "../config/context";

@Resolver((_of) => FoodItem)
export default class FoodItemResolver {
	@Query((_returns) => [FoodItem], { nullable: true })
	foodGroup(@Arg("input") groupId: string, @Ctx() { dataSources }: Context) {
		return dataSources.bedcaAPI.getFoodGroup(groupId);
	}
}
