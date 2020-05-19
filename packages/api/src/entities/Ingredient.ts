import { ObjectType, Field, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { IFoodItem } from "./IFoodItem";
import { UnitEnum } from "./UnitEnum";

@ObjectType({ implements: IFoodItem, description: "The bedca Food Item" })
export class Ingredient {
	@prop({ required: true })
	externalId!: string;

	@prop({ required: true })
	name!: string;

	@Field((_type) => ID)
	id?: string;

	@Field()
	@prop({ required: true })
	quantity!: number;

	@Field((_type) => UnitEnum)
	@prop({ required: true, enum: UnitEnum, type: Number })
	unit!: UnitEnum;
}

export interface IngredientInterface extends Ingredient {}
