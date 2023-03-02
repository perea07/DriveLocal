import express from 'express';
import { Filesrocket } from '@filesrocket/core';
import { LocalService } from '@filesrocket/local';
import path from 'path';

const port = 3030

const filesrocket = new Filesrocket();

const service = new LocalService({
    pagination: { default: 15, max: 50 },
    host: "http://localhost:3030",
    directory: "uploads"
});

filesrocket.register("local", service);
const localController = filesrocket.controller("local")

const app = express();

app.get("/files", async (req, res, next) => {
    try {
        const files = await localController?.create(req, {});
        res.json(files);
    } catch (error) {
        next(error);
    }
});

app.use("/uploads",express.static(path.resolve("uploads")));

app.listen(port, ()=>{
    console.log(`Execute app in port ${port}`);
});

