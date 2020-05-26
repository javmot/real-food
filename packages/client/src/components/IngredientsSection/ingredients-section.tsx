import React from "react";
import { Styled, Box, IconList } from "@real-food/theme";
import { IngredientsSectionProps } from "./interfaces";
import withQueryData from "../../lib/with-query-data";

const IngredientsSection = ({ ingredients = [] }: IngredientsSectionProps) => {
	if (!ingredients.length) {
		return <></>;
	}

	return (
		<Box>
			<Styled.h1 as="h3">{ingredients.length} Ingredients</Styled.h1>
			<IconList>
				{ingredients.map((ingredient) => (
					<IconList.Item key={ingredient.externalId}>
						{ingredient.quantity} gramos {ingredient.name}
					</IconList.Item>
				))}
			</IconList>
		</Box>
	);
};

export default withQueryData(IngredientsSection);
