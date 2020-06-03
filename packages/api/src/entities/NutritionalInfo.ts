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

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminA: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminD: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminE: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminB9: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminB3: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminB2: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminB1: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminB12: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminB6: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	vitaminC: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	calcium: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	iron: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	potasium: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	magnesium: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	sodium: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	phosphorus: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	iodide: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	selenium: NutritionalValue;

	@Field((_type) => NutritionalValue)
	@prop({ required: false, _id: false })
	zinc: NutritionalValue;
}

export interface NutritionalInfoInterface extends NutritionalInfo {}
