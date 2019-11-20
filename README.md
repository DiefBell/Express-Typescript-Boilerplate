# Express Typescript Boilerplate
### OAuth2 Authentication with PassportJS
Boilerplate for an Express server using the power of Typescript with TypeStack Routing Controllers for decorator-based routing and TypeORM for typed object relational mapping. The dotenv package is used for injecting environment variables into test code.

This example shows you how to authenticate your users with Discord using OAuth2, though you should be able to easily adapt this to use another [PassportJS Strategy](http://www.passportjs.org/packages/). After authentication, the user is directed to the "profile" page which will display their Discord avatar.

There is a TypeORM model in src/api/models for representing a user in a database, which shows you some of the basics of using TypeORM.

You can overwrite the tslint.json as it is fairly opinionated and not to everyone's taste :)

Please let me know if there are any examples you'd like to see :) TypeORM and TypeStack Routing Controllers's documentation is really really good!

#### Installation:
1. Clone this repository edit the repository info in `package.json` and any relavent git settings.
2. Run `npm install` to install dependencies.
3. Edit `.env` and change the server and database configurations. By default, the database uses MySQL, so if you're using something else you'll need to install other database adapters (and uninstall the MySql one) and edit the `src/config/datbase.cfg.ts` file to whatever one you're now using.
4. Add a session key (any made up string) and your Discord application client ID and secret to `.env`. If you don't yet have a Discord OAuth2 application, you can make one [here](https://discordapp.com/developers/applications/). You'll need to ensure that your redirect in the OAuth2 tab points to `http://localhost:3000/auth/discord/redirect`.

#### Running the App
5. Run `npm run start:dev` to launch the server with nodemon watcher, which will reload the server when you make changes. Run with `npm run start` to launch without nodemon.
6. Open `http://localhost:3000/` to see a link to the authentication page.
7. You will then be redirected to `http://localhost:3000/profile`, which will display your Discord avatar.

#### Building and Deploying
8. Build the app to `./dist` by running `npm run build`. This needs to be done from a Bash terminal as it uses the `cp` command to copy some files into the dist directory.
9. CD into the dist directory and run `npm install --production` to install production packages. Note that you should probably leave this until you've actually deployed it to a server.
10. Either set your environment variables to match the ones used in `.env` or copy your `.env` file into the `./dist` folder.
11. Run the production server with `npm run start:prod`.

#### Useful Documentation:
- [Controller routing](https://github.com/typestack/routing-controllers)
- [TypeORM](https://typeorm.io/#/)
- [Class Validation](https://github.com/typestack/class-validator)
- [PassportJS](http://www.passportjs.org/)

##### Optional:
+ Install the "#region folding for VS Code" package to allow for region folding.
+ Install the "vscode-icons" package for nicer icons in the file explorer.