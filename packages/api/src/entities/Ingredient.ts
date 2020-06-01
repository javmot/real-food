import { ObjectType, Field, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { NutritionalInfo } from "./NutritionalInfo";
import { IFoodItem } from "./IFoodItem";

@ObjectType({ implements: IFoodItem, description: "The bedca Food Item Info" })
export class Ingredient {
	@Field((_type) => ID)
	id?: string;

	@prop({ required: true })
	externalId!: string;

	@prop({ required: true })
	name!: string;

	@Field((_type) => NutritionalInfo)
	@prop({ required: true })
	nutritionalInfo!: NutritionalInfo;
}

export interface IngredientInterface extends Ingredient {}
