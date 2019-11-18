import * as express from 'express';
import { Express as ExpressApp} from "express-serve-static-core";
import * as hbs from 'express-handlebars';
import * as path from 'path';



export namespace handlebars
{
	const options : ExphbsOptions = { // may export later if needed but probs not
		extname: "hbs",
		defaultLayout: "layout",
		layoutsDir: path.join(__dirname, "../views/layouts"),
		partialsDir: path.join(__dirname, "../views/partials"),
	};
	
	export const init = (app : ExpressApp) =>
	{
		app.engine("hbs", hbs(options)); // create handlebars engine
		app.set("view engine", "hbs"); // set handlebars engine as our view engine
		app.set("views", path.join(__dirname, "../views")); // set views folder
		app.use(express.static(path.join(__dirname, "../public"))); // static folder for css etc.
	};
}