import "reflect-metadata";
import faker from "faker";
import { uniqueId, times } from "lodash";
import { MongoClient } from "mongodb";
import { UserInterface } from "./src/entities/User";
import { RecipeCategoryInterface } from "./src/entities/RecipeCategory";
import { DB_DEV } from "./src/config/db";

function getFakeUser(): UserInterface {
	const username = uniqueId(faker.name.firstName());
	return {
		email: faker.internet.email(),
		username,
		hash: "poiqwerqn4rqy23408helsdkahnfoa;ewigh",
	};
}

function getFakeCategory(): RecipeCategoryInterface {
	return {
		title: faker.commerce.department(),
	};
}

MongoClient.connect(
	DB_DEV,
	{
		useUnifiedTopology: true,
	},
	async function cb(_err, client) {
		const db = client.db();
		db.dropDatabase();

		const usersCollection = db.collection("users");
		const categoriesCollection = db.collection("recipecategories");

		await usersCollection.insertMany(times(20).map(() => getFakeUser()));

		await categoriesCollection.insertMany(
			times(3).map(() => getFakeCategory())
		);

		// eslint-disable-next-line no-console
		console.log("Database seeded! :)");
		client.close();
	}
);
