import { ObjectType, Field } from "type-graphql";
import { prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { IFoodItem } from "./IFoodItem";
import { Ingredient } from "./Ingredient";

@ObjectType({ implements: IFoodItem, description: "The bedca Food Item" })
export class RecipeIngredient {
	_id!: ObjectId;

	@prop({ required: true })
	externalId!: string;

	@prop({ required: true })
	name!: string;

	@Field()
	@prop({ required: true })
	quantity!: number;

	@Field((_type) => Ingredient)
	@prop({ ref: "Ingredient", required: true })
	details!: Ref<Ingredient>;
}

export interface RecipeIngredientInterface extends RecipeIngredient {}
