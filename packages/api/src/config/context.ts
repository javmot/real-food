import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { IFoodDataSources } from "../lib/IFoodDataSource";
import BedcaAPI from "../lib/BedcaAPI";
import { UserModel } from "../entities/User";

export interface Context {
	headers: IncomingHttpHeaders;
	user: string;
	req: Request;
	res: Response;
	dataSources: IFoodDataSources;
}

export const dataSources = (): DataSources<IFoodDataSources> => ({
	bedcaAPI: new BedcaAPI(),
});

export const context = async (req: Request, res: Response) => {
	// TODO: Auth Logic
	const userDoc = await UserModel.findOne();
	const user = userDoc && userDoc._id;
	return {
		user,
		req,
		res,
	};
};
