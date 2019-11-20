import { JsonController, Post } from "routing-controllers";

@JsonController("/") // assuming this is for an API, we're most likely using JSON
export class AdminController
{
    @Post("/")
    public admin()
    {
        // don't need a token to access this area
    }
}