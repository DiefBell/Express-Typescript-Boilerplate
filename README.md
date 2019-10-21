# Express Typescript Boilerplate
Lightweight, barebones boilerplate with no extra crap that you may not need.
### Using TypeStack Routing Controllers for decorator-based routing and TypeORM for typed Object-Relational-Mapping

#### Installation:
1. Clone this repository
2. Run `npm install` to install dependencies.
3. Edit `ormconfig.json` and change the database configuration. By default this uses MySQL, so you'll need to uninstall other database adapters (and uninstall the MySql one) and edit `ormconfig.json` to use this new adapter.
4. Run `npm run start-dev` to launch the server with nodemon watcher. Run with `npm run start` to launch without nodemon.
5. Open `http://localhost:3000/api/v1` to see the "Hello, world!" example.
6. Open `http://localhost:3000/api/v1/your_name` to see the "Hello, your_name!" example.
7. Build the app to `.build/` by running `npm run build`.
