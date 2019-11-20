import { JsonController, Post, Authorized } from "routing-controllers";

@JsonController("/admin") // assuming this is for an API, we're most likely using JSON
export class AdminController
{
    @Post("/")
    @Authorized("ADMIN") // only people with a JSON web token containing the ADMIN role can access this endpoint
    public admin()
    {
        // some code to do some admin stuff
    }
}