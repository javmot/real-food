import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { ApolloServer } from "apollo-server";
import faker from "faker";

const main = async () => {
	const schema = loadSchemaSync(join(__dirname, "..", "schema.gql"), {
		loaders: [new GraphQLFileLoader()],
	});

	const server = new ApolloServer({
		schema,
		mocks: {
			Int: () => faker.random.number(10),
			Float: () => faker.random.number(500),
			String: () => faker.lorem.words(faker.random.number(10)),
			DateTime: () => new Date(),
		},
	});
	server.listen({ port: 9002 }, () =>
		// eslint-disable-next-line no-console
		console.log(
			`🚀 Server ready and listening at ==> http://localhost:9002/graphql`
		)
	);
};

main().catch((error) => {
	// eslint-disable-next-line no-console
	console.log(error, "error");
});
