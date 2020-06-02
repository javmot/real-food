import "reflect-metadata";
import faker from "faker";
import { uniqueId, times } from "lodash";
import { MongoClient } from "mongodb";
import { UserInterface } from "../entities/User";
import { RecipeCategoryInterface } from "../entities/RecipeCategory";
// import { RecipeInterface } from "../entities/Recipe";
// import { RecipeIngredientInterface } from "../entities/RecipeIngredient";
// import { RecipeStepInterface } from "../entities/RecipeStep";
import { DB_DEV } from "../config/db";

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

// function getFakeIngredients(): RecipeIngredientInterface[] {
// 	return times(Math.round(faker.random.number({ min: 5, max: 15 }))).map(
// 		() => ({
// 			_id: new ObjectID(),
// 			externalId: `${Math.round(faker.random.number(500))}`,
// 			name: faker.commerce.product(),
// 			quantity: faker.random.number(100),
// 		})
// 	);
// }

// function getFakeRecipeSteps(): RecipeStepInterface[] {
// 	return times(Math.round(faker.random.number(10))).map(() => ({
// 		_id: new ObjectID(),
// 		title: faker.commerce.productAdjective(),
// 		description: faker.lorem.paragraph(10),
// 	}));
// }

// function getFakeRecipe(
// 	users: Array<any>,
// 	categories: Array<any>
// ): RecipeInterface {
// 	const defaultObj: any = {};
// 	const category = sample(categories) || defaultObj;
// 	const user = sample(users) || defaultObj;
// 	const title = faker.commerce.productName();

// 	return {
// 		title,
// 		time: `${Math.round(faker.random.number(40))} minutos`,
// 		servings: Math.round(faker.random.number(6)),
// 		categoryId: category._id,
// 		userId: user._id,
// 		ingredients: getFakeIngredients(),
// 		steps: getFakeRecipeSteps(),
// 		info: {
// 			name: title,
// 			foodValues: [1].map(() => ({
// 				_id: new ObjectID(),
// 				externalId: "409",
// 				name: "calorias",
// 				total: Math.round(faker.random.number(500)),
// 				unit: "KJ",
// 			})),
// 		},
// 		active: true,
// 		createdAt: new Date(),
// 		updatedAt: new Date(),
// 	};
// }

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
		// const recipesCollection = db.collection("recipes");

		await usersCollection.insertMany(times(20).map(() => getFakeUser()));

		await categoriesCollection.insertMany(
			times(3).map(() => getFakeCategory())
		);

		// const usersDocs = await usersCollection.find().toArray();
		// const categoriesDocs = await categoriesCollection.find().toArray();

		// await recipesCollection.insertMany(
		// 	times(50).map(() => getFakeRecipe(usersDocs, categoriesDocs))
		// );

		// eslint-disable-next-line no-console
		console.log("Database seeded! :)");
		client.close();
	}
);
