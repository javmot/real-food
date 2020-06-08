import { ObjectType, Field } from "type-graphql";
import { ObjectId } from "mongodb";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Steps Of the Recipe" })
export class RecipeStep {
	_id?: ObjectId;

	@Field()
	@prop({ required: true })
	title!: string;

	@Field({ nullable: true })
	@prop()
	img?: string;

	@Field({ nullable: true })
	@prop()
	description?: string;
}

export const RecipeStepModel = getModelForClass(RecipeStep, {
	schemaOptions: { timestamps: true },
});
