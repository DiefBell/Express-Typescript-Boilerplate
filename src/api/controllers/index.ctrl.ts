import { Controller, Get, Post, Render, CurrentUser } from "routing-controllers";
import { User } from "../models/User.ent";


@Controller("/")
export class IndexController
{
	@Get("/")
	//@Render("index")
    private async getIndex(@CurrentUser() user : User)
    {
		return `<a href="auth/discord">Authenticate with Discord</a>`;
	}
}