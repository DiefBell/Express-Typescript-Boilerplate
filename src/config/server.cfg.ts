import { RoutingControllersOptions, Action } from "routing-controllers";

export namespace server
{
	export const port = parseInt(process.env.EXPRESS_PORT);
	export const settings : RoutingControllersOptions = {
		controllers: [__dirname + "/../api/controllers/**/*.ts"],
		middlewares: [__dirname + "/../api/middlewares/**/*.ts"],
		cors: true
	};
}