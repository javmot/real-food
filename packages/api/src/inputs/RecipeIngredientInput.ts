import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { RecipeIngredient } from "../entities/RecipeIngredient";

@InputType()
export class RecipeIngredientInput implements Partial<RecipeIngredient> {
	@Field()
	@Length(1, 255)
	externalId!: string;

	@Field()
	quantity!: number;

	@Field({ nullable: true })
	name?: string;
}
