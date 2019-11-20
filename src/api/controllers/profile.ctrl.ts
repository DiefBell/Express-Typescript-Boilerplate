import { Controller, Get, Render, CurrentUser, UseBefore } from "routing-controllers";
import { User } from "../models/User.ent";
import * as passport from 'passport';



@Controller("/profile")
export class ProfileController
{
	@Get("/")
    //@Render("profile")
    public async getProfile(@CurrentUser({ required: true }) user : User)
    {
        return `<img src="https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatarHash}.png" />`;
    }
}