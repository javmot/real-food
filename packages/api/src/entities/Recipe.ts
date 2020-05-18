import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop, arrayProp, index, getModelForClass } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Ref } from "../types";
import { User } from "./User";
import { RecipeStep } from "./RecipeStep";
import { Ingredient } from "./Ingredient";
import { FoodInfo } from "./FoodInfo";
import { RecipeCategory } from "./RecipeCategory";

@index({ title: 1, userId: 1 }, { unique: true })
@ObjectType({ description: "The Recipe model" })
export class Recipe extends TimeStamps {
	@Field((_type) => ID)
	// Autogenerated key by Mongo. Graphql not nullable
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
	@prop({ ref: RecipeCategory, required: true })
	categoryId!: Ref<RecipeCategory>;

	@Field((_type) => RecipeStep)
	@arrayProp({ items: RecipeStep, default: [] })
	steps!: RecipeStep[];

	@Field((_type) => Ingredient)
	@arrayProp({ items: Ingredient, default: [] })
	ingredients!: Ingredient[];

	@Field((_type) => FoodInfo, { nullable: true })
	@prop({ type: FoodInfo, default: {} })
	info!: FoodInfo;

	@Field((_type) => String)
	@prop({ ref: User, required: true })
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