import Link from "next/link";
import React from "react";
import { Styled, StyledLink, Text } from "@real-food/theme-ui";
import { RecipeItemProps } from "./interfaces";

const RecipeItem = React.memo(
	({ title, id, category, user }: RecipeItemProps) => {
		return (
			<div>
				<Styled.h3>
					<Link href="/recipes/[id]" as={`/recipes/${id}`}>
						<StyledLink>{title}</StyledLink>
					</Link>
				</Styled.h3>
				<div>
					<Text variant="small">Category: {category.title}</Text>
				</div>
				<div>
					<Text variant="small">Created by: {user.username}</Text>
				</div>
			</div>
		);
	}
);

export default RecipeItem;
