import { ObjectType, Field } from "type-graphql";
import { prop, arrayProp } from "@typegoose/typegoose";
import { NutritionalValue } from "./NutritionalValue";

@ObjectType({ description: "TO-DO" })
export class NutritionalInfo {
	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	energy!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	fat!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	protein!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	carbohydrate!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	fibre!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	water!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	alcohol!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	monounsaturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	polyunsaturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	saturated!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	cholesterol!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	trans!: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	sugar!: NutritionalValue;

	@Field((_type) => [NutritionalValue])
	@arrayProp({ items: NutritionalValue, default: [] })
	vitamins?: NutritionalValue[];

	@Field((_type) => [NutritionalValue])
	@arrayProp({ items: NutritionalValue, default: [] })
	minerals?: NutritionalValue[];
}

export interface NutritionalInfoInterface extends NutritionalInfo {}
