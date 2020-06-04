import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType({ description: "The User model" })
export class User {
	_id?: ObjectId;

	@Field()
	@prop({ required: true, unique: true })
	email!: string;

	@Field()
	@prop({ required: true, unique: true })
	username!: string;

	@prop({ required: true })
	hash!: string;
}

export const UserModel = getModelForClass(User);

export interface UserInterface extends User {}
