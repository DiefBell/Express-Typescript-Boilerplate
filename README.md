# Express Typescript Boilerplate
### Authorization using JSON Web Tokens
Boilerplate for an Express server using the power of Typescript with TypeStack Routing Controllers for decorator-based routing and TypeORM for typed object relational mapping. The dotenv package is used for injecting environment variables into test code.

This example shows how you can use JSON web tokens for authenticating your users. Although PassportJS also supports JWTs (see the Passport branch for an example using Discord OAuth2), this method is more minimalist than installing all of PassportJS.

You can overwrite the tslint.json as it is fairly opinionated and not to everyone's taste :)

Please let me know if there are any examples you'd like to see :) TypeORM and TypeStack Routing Controllers's documentation is really really good!

#### Installation:
1. Clone this repository edit the repository info in `package.json` and any relavent git settings.
2. Run `npm install` to install dependencies.
3. Edit `.env` and change the server and database configurations. By default, the database uses MySQL, so if you're using something else you'll need to install other database adapters (and uninstall the MySql one) and edit the `src/config/datbase.cfg.ts` file to whatever one you're now using.
4. Add your JWT secret to `.env` and use a tool like [jwt.io](http://jwt.io) to create a token, with or without setting `"user": {"role": "ADMIN}` in the headers.

#### Running the App
5. Run `npm run start:dev` to launch the server with nodemon watcher, which will reload the server when you make changes. Run with `npm run start` to launch without nodemon.
6. Use a tool such as [Postman](https://www.getpostman.com/) to post to the endpoints. Experiment with setting an "Authorization" header, with or without an admin role. Remember to prefix your token with "bearer" and a space! 

#### Building and Deploying
7. Build the app to `./dist` by running `npm run build`. This needs to be done from a Bash terminal as it uses the `cp` command to copy some files into the dist directory.
8. CD into the dist directory and run `npm install --production` to install production packages. Note that you should probably leave this until you've actually deployed it to a server.
9. Either set your environment variables to match the ones used in `.env` or copy your `.env` file into the `./dist` folder.
10. Run the production server with `npm run start:prod`.

#### Useful Documentation:
- [Controller routing](https://github.com/typestack/routing-controllers)
- [TypeORM](https://typeorm.io/#/)
- [Class Validation](https://github.com/typestack/class-validator)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)

##### Optional:
+ Install the "#region folding for VS Code" package to allow for region folding.
+ Install the "vscode-icons" package for nicer icons in the file explorer.
