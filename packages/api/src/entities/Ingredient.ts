import { ObjectType, Field, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { NutritionalInfo } from "./NutritionalInfo";

@ObjectType({ description: "The bedca Food Item Info" })
export class Ingredient {
	@Field((_type) => ID)
	id?: string;

	@Field((_type) => ID)
	@prop({ required: true })
	externalId!: string;

	@Field({ nullable: true })
	@prop({ required: true })
	name!: string;

	@Field((_type) => NutritionalInfo)
	@prop({ required: true })
	nutritionalInfo!: NutritionalInfo;
}

export interface IngredientInterface extends Ingredient {}
