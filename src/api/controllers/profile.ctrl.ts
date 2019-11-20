import { JsonController, Post, Authorized, CurrentUser } from "routing-controllers";

@JsonController("/profile")
class profileController
{
    @Post("/")
    @Authorized() // don't need a specific role, but must at least have a token
    public profile(@CurrentUser({ required: true }) user : any) // having a user is of course required for the profile endpoint
    {
        // return some profile info
        if(user.role == "ADMIN")
        {
            // maybe some admin-only profile info
        }
    }
}