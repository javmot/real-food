import { ObjectType, Field } from "type-graphql";
import { prop, arrayProp } from "@typegoose/typegoose";
import { NutritionalValue } from "./NutritionalValue";

@ObjectType({ description: "TO-DO" })
export class NutritionalInfo {
	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	energy!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	fat!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	protein!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	carbohydrate!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	fibre!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	water!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	alcohol!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	monounsaturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	polyunsaturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	saturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	cholesterol!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	trans!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false })
	sugar!: NutritionalValue;

	@Field((_type) => [NutritionalValue])
	@arrayProp({ items: NutritionalValue, default: [] })
	vitamins!: NutritionalValue[];

	@Field((_type) => [NutritionalValue])
	@arrayProp({ items: NutritionalValue, default: [] })
	minerals!: NutritionalValue[];
}

export interface NutritionalInfoInterface extends NutritionalInfo {}
