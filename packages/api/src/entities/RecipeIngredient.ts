import { ObjectType, Field, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { IFoodItem } from "./IFoodItem";

@ObjectType({ implements: IFoodItem, description: "The bedca Food Item" })
export class RecipeIngredient {
	@prop({ required: true })
	externalId!: string;

	@prop({ required: true })
	name!: string;

	@Field((_type) => ID)
	id?: string;

	@Field()
	@prop({ required: true })
	quantity!: number;
}

export interface RecipeIngredientInterface extends RecipeIngredient {}
