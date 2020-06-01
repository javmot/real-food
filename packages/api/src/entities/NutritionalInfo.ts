import { ObjectType, Field } from "type-graphql";
import { prop, arrayProp } from "@typegoose/typegoose";
import { NutritionalValue } from "./NutritionalValue";

@ObjectType({ description: "TO-DO" })
export class NutritionalInfo {
	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	energy!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	fat!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	protein!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	carbohydrate!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	fibre!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	water!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	alcohol!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	monounsaturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	polyunsaturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	saturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	cholesterol!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	trans!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: true })
	sugar!: NutritionalValue;

	@Field((_type) => [NutritionalValue])
	@arrayProp({ items: NutritionalValue, default: [] })
	vitamins!: NutritionalValue[];

	@Field((_type) => [NutritionalValue])
	@arrayProp({ items: NutritionalValue, default: [] })
	minerals!: NutritionalValue[];
}

export interface NutritionalInfoInterface extends NutritionalInfo {}
