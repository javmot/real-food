const { promises: fs } = require("fs");

export const log = (data: any) => {
	fs.writeFile("log.txt", JSON.stringify(data), "utf8");
	return data;
};
