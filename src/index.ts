require('dotenv').config(); // inject values in .env into environment variables
import * as Config from "./config/_configs";

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { useExpressServer } from 'routing-controllers';
import * as express from 'express';

// don't use routing-controllers's "createExpressServer" as routes should be done
// after other middlewares else it messes things up
const app = express();
Config.handlebars.init(app);

createConnection(Config.data.settings)
    .then(async (connection) =>
    {
        const server = useExpressServer(app, Config.server.settings).listen(Config.server.port);
        console.log(`Express server listening on port ${Config.server.port}.`);
        console.log(`Connected to database "${Config.data.database}" on ${Config.data.host}:${Config.data.port}.`);
    })
    .catch((error) =>
    {
        console.log(error);
    });