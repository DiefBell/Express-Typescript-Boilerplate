import { Controller, Get, UseBefore, Redirect, Req, CurrentUser } from 'routing-controllers';
import * as passport from 'passport';
import { User } from '../models/User.ent';
import { Request } from 'express-serve-static-core';

@Controller("/auth")
export class AuthController
{
	@Get("/discord")
	@UseBefore(passport.authenticate("discord"))
	private async login(){}
	
	@Get("/discord/redirect")
	@UseBefore(passport.authenticate("discord"))
	@Redirect("/profile")
	private async redirect(@CurrentUser() user : User ){}
}