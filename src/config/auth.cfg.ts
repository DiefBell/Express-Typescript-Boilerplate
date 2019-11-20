import { Express as ExpressApp} from "express-serve-static-core";
import { Strategy as DiscordStrategy } from 'passport-discord';
import * as passport from 'passport';
import { User } from "../api/models/User.ent";
import cookieSession = require('cookie-session');
import { Action } from "routing-controllers";

type callback = (err : Error | null, value : any) => void;



export namespace auth
{
	export const init = (app : ExpressApp) =>
	{
		passport.use(
			new DiscordStrategy({
				clientID: process.env.DISCORD_CLIENT_ID,
				clientSecret: process.env.DISCORD_CLIENT_SECRET,
				callbackURL: '/auth/discord/redirect',
				scope: [ "identify", "email" ]
			}, (accessToken, refreshToken, profile, done : callback) =>
			{
				User.findOne({
					where: {
						discordId: profile.id
					}
				}).then((user : User) =>
				{
					if(user)
					{
						if(user.username != profile.username || // is there a more elegant way to do this??
							user.discriminator != profile.discriminator ||
							user.avatarHash != profile.avatar ||
							user.email != profile.email)
						{
							user.username = profile.username;
							user.discriminator = profile.discriminator;
							user.avatarHash = profile.avatar;
							user.email = profile.email;
							user.save().then((user : User) =>
							{
								console.log(`Info updated for ${user.username}#${user.discriminator}.`);
								done(null, user);
							});
						}
						else
						{
							console.log(`${user.username}#${user.discriminator} has authenticated.`);
							done(null, user);
						}
					}
					else
					{
						user = new User();
						user.discordId = profile.id;
						user.username = profile.username;
						user.discriminator = profile.discriminator;
						user.avatarHash = profile.avatar;
						user.email = profile.email;
						
						user.save().then((newUser : User) =>
						{
							console.log(`Created new user ${newUser.username}#${newUser.discriminator}.`);
							done(null, newUser);
						});
					}
				});
			})
		);

		passport.serializeUser((user : User, done : callback) =>
		{
			done(null, user._id);
		});

		passport.deserializeUser((id : string, done : callback) =>
		{
			User.findOne({_id: id}).then((user : User) =>
			{
				done(null, user);
			})
			.catch((error) => // this shouldn't™ ever happen
			{
				done(error, null);
			});
		});
		
		app.use(cookieSession({
			maxAge: 24 * 3600 * 1000, // one day in milliseconds
			keys: [ process.env.SESSION_KEY ]
		}));

		app.use(passport.initialize());
    	app.use(passport.session());
	};

	export const authCheck = (action : Action, roles : string[]) => new Promise<boolean>((resolve, reject) =>
	{
		passport.authenticate('discord', (err : Error, user : User) =>
		{
			if (err)
			{
				return reject(err);
			}
			if (!user)
			{
				if (roles.length > 1)
				{
					return resolve(false);
				}
				return resolve(true);
			}

			if(roles.includes("ADMIN") && !user.isSuperAdmin)
			{
				return resolve(false);
			}

			action.request.user = user;
			return resolve(true);
		})(action.request, action.response, action.next);
	});

	export const userCheck = (action : Action) => action.request.user;
}