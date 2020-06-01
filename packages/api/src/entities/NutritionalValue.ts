import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType({ description: "TO-DO" })
export class NutritionalValue {
	@Field()
	@prop({ required: true })
	externalId!: string;

	@Field()
	@prop({ required: true })
	name!: string;

	@Field()
	@prop({ required: true })
	quantity!: number;

	@Field()
	@prop({ required: true })
	unit!: string;
}

export interface NutritionalValueInterface extends NutritionalValue {}
