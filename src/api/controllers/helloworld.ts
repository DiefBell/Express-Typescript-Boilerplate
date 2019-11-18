import { Controller, Get, Param, Render } from "routing-controllers";

@Controller("/hello")
export class HelloWorldController
{
    @Get("/")
    @Render("index")
    private helloWorld()
    {
        return {
            tab_title: "TS Express Boilerplate"
        };
    }
    
    @Get("/:name")
    @Render("index")
    private helloPerson(@Param("name") name : string)
    {
        return {
            tab_title: `Hello, ${name}!`
        };
    }
}