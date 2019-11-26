import { Request } from "express-serve-static-core";
import { diskStorage } from "multer";
import { extname } from "path";

type Callback = (error : null | Error, val : any) => void;
type File = Express.Multer.File;



export namespace uploads
{
    export const options = {
        storage: diskStorage({
            destination: "tmp/uploads"
        }),
        fileFilter: (req : Request, file : File, cb : Callback) =>
        {
            const isValid = file.mimetype == "application/x-zip-compressed" && extname(file.originalname) == ".zip";
            console.log(`Uploaded file with mime type ${file.mimetype} is ${isValid ? "valid" : "invalid"}.`);
            cb(null, isValid);
        },
        limits: {
        }
    };
}