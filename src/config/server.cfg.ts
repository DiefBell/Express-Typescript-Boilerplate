import { RoutingControllersOptions, Action } from "routing-controllers";
import { auth }from "./auth.cfg";

export namespace server
{
	export const port = parseInt(process.env.EXPRESS_PORT);
	export const settings : RoutingControllersOptions = {
		controllers: [__dirname + "/../api/controllers/**/*.ts"],
		middlewares: [__dirname + "/../api/middlewares/**/*.ts"],
		cors: true,
		authorizationChecker: auth.authCheck,
		currentUserChecker: auth.userCheck
	};
}