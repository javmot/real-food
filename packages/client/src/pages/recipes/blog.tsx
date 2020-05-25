import React from "react";
import { Styled, Container } from "@real-food/theme";
import Head from "../../components/Head";
import { withApollo } from "../../lib/with-apollo";
import RecipeListContainer from "../../components/RecipeListContainer";

const Blog = () => {
	return (
		<div>
			<Head>
				<title>Recipes Blog</title>
			</Head>
			<Container>
				<Styled.h1>Recipes Blog</Styled.h1>
				<RecipeListContainer />
			</Container>
		</div>
	);
};

export default withApollo({ ssr: true })(Blog);
