import React from "react";
import { Styled } from "@real-food/theme";
import Head from "../../components/Head";
import { withApollo } from "../../lib/with-apollo";
import RecipeListContainer from "../../components/RecipeListContainer";

const Blog = () => {
	return (
		<div>
			<Head>
				<title>Recipes Blog</title>
			</Head>
			<Styled.h1>Recipes Blog</Styled.h1>
			<RecipeListContainer />
		</div>
	);
};

export default withApollo({ ssr: true })(Blog);
