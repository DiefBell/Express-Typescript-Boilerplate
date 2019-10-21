# Express Typescript Boilerplate
Lightweight, barebones boilerplate with no extra crap that you may not need.
### Using TypeStack Routing Controllers for decorator-based routing and TypeORM for typed Object-Relational-Mapping

** Please let me know if there are any examples you'd like to see :) There isn't much in this project on how to use TypeORM or TypeStack Routing Controllers, but their documentation is really really good! **

#### Installation:
1. Clone this repository
2. Run `npm install` to install dependencies.
3. Edit `ormconfig.json` and change the database configuration. By default this uses MySQL, so you'll need to uninstall other database adapters (and uninstall the MySql one) and edit `ormconfig.json` to use this new adapter.
4. Run `npm run start-dev` to launch the server with nodemon watcher. Run with `npm run start` to launch without nodemon.
5. Open `http://localhost:3000/api/v1` to see the "Hello, world!" example.
6. Open `http://localhost:3000/api/v1/your_name` to see the "Hello, your_name!" example.
7. Build the app to `.build/` by running `npm run build`.

#### Useful Documentation:
- [Controller routing](https://github.com/typestack/routing-controllers)
- [TypeORM](https://typeorm.io/#/)
- [Class Validation](https://github.com/typestack/class-validator)

##### Optional:
+ Build the app to `.build/` by running `npm run build`.
+ Install the "#region folding for VS Code" package to allow for region folding.
+ Install the "vscode-icons" package for nicer icons in the file explorer.
