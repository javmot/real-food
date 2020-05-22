import React from "react";
import Link from "next/link";
import { Styled, StyledLink } from "@real-food/theme-ui";
import Head from "../components/Head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Recipes App</title>
			</Head>
			<Styled.h1>Recipes App</Styled.h1>
			<Link href="/recipes/blog">
				<StyledLink>Recipes Blog</StyledLink>
			</Link>
			<br />
			<Link href="/users/new-recipe">
				<StyledLink>New Recipe</StyledLink>
			</Link>
		</>
	);
}
