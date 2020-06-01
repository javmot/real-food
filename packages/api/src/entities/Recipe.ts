import { ObjectType, Field, ID, Int } from "type-graphql";
import {
	prop,
	arrayProp,
	index,
	plugin,
	getModelForClass,
	Ref,
} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { User } from "./User";
import { RecipeStep } from "./RecipeStep";
import { RecipeIngredient } from "./RecipeIngredient";
import { NutritionalInfo } from "./NutritionalInfo";
import { RecipeCategory } from "./RecipeCategory";

const arrayUniquePlugin = require("mongoose-unique-array");

@plugin(arrayUniquePlugin)
@index({ title: 1, userId: 1 }, { unique: true })
@ObjectType({ description: "The Recipe model" })
export class Recipe extends TimeStamps {
	@Field((_type) => ID)
	id?: string;

	@Field()
	@prop({ required: true })
	title!: string;

	@Field()
	@prop({ required: true })
	time!: string;

	@Field((_type) => Int)
	@prop({ required: true })
	servings!: number;

	@Field((_type) => String)
	@prop({ ref: "RecipeCategory", required: true })
	categoryId!: Ref<RecipeCategory>;

	@Field((_type) => RecipeStep)
	@arrayProp({ items: RecipeStep, default: [] })
	steps!: RecipeStep[];

	@Field((_type) => RecipeIngredient)
	@arrayProp({ items: RecipeIngredient, default: [] })
	ingredients!: RecipeIngredient[];

	@Field((_type) => NutritionalInfo, { nullable: true })
	@prop({ type: NutritionalInfo, default: {} })
	nutritionalInfo?: NutritionalInfo;

	@Field((_type) => String)
	@prop({ ref: "User", required: true })
	userId!: Ref<User>;

	@prop({ default: false })
	active!: boolean;

	@Field()
	createdAt!: Date;

	@Field()
	updatedAt!: Date;
}

export const RecipeModel = getModelForClass(Recipe);

export interface RecipeInterface extends Recipe {}
