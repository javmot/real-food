import Link from "next/link";
import React from "react";
import { Styled } from "@real-food/theme-ui";
import { RecipeItemProps } from "./interfaces";

const RecipeItem = React.memo(
	({ title, id, category, user }: RecipeItemProps) => {
		return (
			<div>
				<h3>
					<Link href="/recipes/[id]" as={`/recipes/${id}`}>
						<Styled.a>{title}</Styled.a>
					</Link>
				</h3>
				<div>
					<small>Category: {category.title}</small>
				</div>
				<div>
					<small>Created by: {user.username}</small>
				</div>
			</div>
		);
	}
);

export default RecipeItem;
