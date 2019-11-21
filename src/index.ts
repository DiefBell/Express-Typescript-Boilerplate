require('dotenv').config(); // inject values in .env into environment variables
import * as Config from "./config/_configs";
const debug = require('debug')("Startup");

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { useExpressServer } from 'routing-controllers';
import * as express from 'express';

// don't use routing-controllers's "createExpressServer" as routes should be done
// after other middlewares else it messes things up
const app = express();
// declare middlewares here

debug(`Attempting to connect to database "${Config.data.database}" on ${Config.data.host}:${Config.data.port}.`);
createConnection(Config.data.settings)
    .then(async (connection) =>
    {
        debug("Successfully connected to database.");
        const server = useExpressServer(app, Config.server.settings).listen(Config.server.port);
        debug(`Express server listening on port ${Config.server.port}.`);
    })
    .catch((error) =>
    {
        debug("Failed to connect to database.");
        debug(error);
    });