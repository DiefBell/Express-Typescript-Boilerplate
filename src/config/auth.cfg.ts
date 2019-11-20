import { Action, UnauthorizedError } from "routing-controllers";
import * as jwt from 'jsonwebtoken';

export namespace auth
{
    export const isAuthorized = (action : Action, roles : string[]) => new Promise<boolean>((resolve, reject) =>
    {
        const authHeader = action.request.headers["Authorization"];
        if(!authHeader)
        {
            return reject(new UnauthorizedError("Authorization header invalid."));
        }
        const parts : string[] = authHeader.split(" ");
        if(parts[0].toLocaleLowerCase() != "bearer") // Authorization for a JWT token should be preceeded by "bearer"
        {
            return reject(new UnauthorizedError("Authorization header invalid."));
        }

        jwt.verify(parts[0], process.env.JWT_SECRET, (err, decodedToken) =>
        {
            if(err)
            {
                console.log(err);
                return reject(err);
            }

            if(roles.length < 1)
            {
                return resolve(true);
            }
            if(roles.includes(decodedToken["role"]))
            {
                action.request.user = decodedToken["user"];
                return resolve(true);
            }
            return resolve(false);
        });
    });

    export const getUser = (action : Action) =>
    {
        return action.request.user;
    };
}