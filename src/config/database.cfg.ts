import { ConnectionOptions } from "typeorm";

export namespace data
{
    // once TypeORM casts these to a specific adapter interface
    // you can't access them anymore, so just exproting these here
    // so that we can access them for things like console logs
    export const port = parseInt(process.env.DB_PORT);
    export const host = process.env.DB_HOST;
    export const database = process.env.DB_DATABASE;

    export const settings : ConnectionOptions = {
        type: "mysql",
        host: host,
        port: port,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: database,
        synchronize: true,
        logging: false,
        entities: [ __dirname + "/../api/models/**/*.ts" ],
        migrations: [ __dirname + "/../api/migrations/*.ts" ],
        subscribers: [ __dirname + "/../api/subscribers/*.ts" ]
    };
}