import express from "express";
import { fileURLToPath } from 'url';
import morgan from "morgan";
import fs from "fs";
import path from "path";
import {dirname} from "path";

let app = express();
let port = 5050;

const __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.get("/", async (req, res) => {
    try {
        
        res.send("Hey Morgan");

    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`App running at port ${port}`);
});