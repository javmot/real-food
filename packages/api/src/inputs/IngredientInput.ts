import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { Ingredient } from "../entities/Ingredient";

@InputType()
export class IngredientInput implements Partial<Ingredient> {
	@Field()
	@Length(1, 255)
	externalId!: string;

	@Field()
	@Length(1, 255)
	name!: string;

	@Field()
	quantity!: number;
}
