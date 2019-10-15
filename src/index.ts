import "reflect-metadata";
import { createConnection } from "typeorm";
import { createExpressServer } from "routing-controllers";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async (connection) =>
{
    createExpressServer({
        controllers: [ __dirname + "/controllers/*.ts" ]
    }).listen(3000);
    console.log("Server started on port 3000.");
})
.catch((error) => console.log("TypeORM connection error: ", error));
