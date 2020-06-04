import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType({ description: "The categories of the recipes" })
export class RecipeCategory {
	_id?: ObjectId;

	@Field()
	@prop({ required: true, unique: true })
	title: string;
}

export const RecipeCategoryModel = getModelForClass(RecipeCategory);

export interface RecipeCategoryInterface extends RecipeCategory {}
