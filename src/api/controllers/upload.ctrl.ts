import { Controller, Post, UploadedFiles, Get } from "routing-controllers";
import { uploads } from "./../../config/_configs";
import { readFileSync } from "fs";
import { join } from "path";

type File = Express.Multer.File;



const uploadOpts = uploads.options;

@Controller("/upload")
export class UploadController
{
    @Get("/")
    private uploadPage()
    {
        return readFileSync(join(__dirname, "../docs/index.html"));
    }

    @Post("/")
    private handleUpload(@UploadedFiles("myFiles", { options: uploadOpts } ) files : File[])
    {
        return `${files.length} files uploaded!`;
    }
}