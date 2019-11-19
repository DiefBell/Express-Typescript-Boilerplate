import { Express as ExpressApp} from "express-serve-static-core";
import * as morgan from 'morgan';
import * as chalk from 'chalk';
import { Request, Response } from 'express';



export namespace logger
{
	export const init = (app : ExpressApp) =>
	{
		const nltab = "\n\t";

		app.use(
			morgan((tokens : any, req : Request, res : Response) : string =>
			{
				const successColor = chalk.hex('#2ed573').bold;
				const failColor = chalk.hex('#ff5252').bold;
				const redirectColor = chalk.hex('#f08400').bold;
				const infoColor = chalk.hex("#2f78ed").bold;

				const status = tokens.status(req, res);
				const method = tokens.method(req, res);
				const endpoint = tokens.url(req, res);
				const resTime = tokens["response-time"](req, res);
				const title = [
					"[" + status + "]",
					method,
					endpoint,
					resTime + " ms"
				].join(" ");

				const statusColor = (200 <= status && status < 300) ?
					successColor : (300 <= status && status < 400) ?
					redirectColor : failColor;

				const date = [
					"\n  time:",
					tokens.date(req, res)
				].join(" ");
				const from = [
					"\n  from:",
					tokens['remote-addr'](req, res),
					"-",
					tokens.referrer(req, res)
				].join(" ");
				const userAgent = [
					"\n  user-agent:",
					tokens['user-agent'](req, res)
				].join(" ");


				return [
					statusColor(title),
					infoColor(date),
					infoColor(from),
					infoColor(userAgent),
					"\n"
				].join(" ");
			})
		);
	};
}