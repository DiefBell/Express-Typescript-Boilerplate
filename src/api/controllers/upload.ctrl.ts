import { Controller, Post, UploadedFiles, Get } from "routing-controllers";
import { uploads } from "./../../config/_configs";
import * as WebTorrent from 'webtorrent';

import * as fs from 'fs';
import * as path from 'path';

const debug = require('debug')("Debug");
const debugSeed = require('debug')("Seeding");

type File = Express.Multer.File;



const uploadOpts = uploads.options;
const torrentsDir = path.join(__dirname, "../../../torrents");

@Controller("/upload")
export class UploadController
{
    constructor() {
        if(!fs.existsSync(torrentsDir))
        {
            fs.mkdirSync(torrentsDir);
        }
        UploadController.torrentClient = UploadController.torrentClient || new WebTorrent();
    }
    @Get("/")
    private uploadPage()
    {
        debug(UploadController.torrentClient);
        return fs.readFileSync(path.join(__dirname, "../docs/index.html"));
    }

    @Post("/")
    private handleUpload(@UploadedFiles("myFiles", { options: uploadOpts } ) files : File[])
    {
        debug(`${files.length} files uploaded!`);
        files.forEach((file : File) =>
        {
            console.log(`>>> ${file.path}`);
            console.log(path.basename(file.originalname));
            UploadController.torrentClient.seed(file.path, (torrent) => 
            {
                const fileName = path.basename(file.originalname, ".zip") + ".torrent";
                fs.writeFile(path.join(torrentsDir, fileName), torrent.torrentFile, (err) =>
                {
                    if(err)
                    {
                        debug(err);
                    }
                    else
                    {
                        debugSeed(`Client is seeding ${torrent.name} @ ${torrent.magnetURI}`);
                    }                    
                });
            });
        });
        return `Torrents created for ${files.length} files!`;
    }

    private static torrentClient : WebTorrent.Instance;
}