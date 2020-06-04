const { promises: fs } = require("fs");

export const log = (data: any) => {
	fs.writeFile("log.json", JSON.stringify(data), "utf8");
	return data;
};

export const notNullableCollection = (collection: Array<any> | null) =>
	collection || [];
