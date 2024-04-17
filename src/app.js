import cors from "cors";
import express, {json} from "express";
import compression from "compression";
import {router} from "express/lib/application";
import {configDotenv} from "dotenv";
import mongoose from "mongoose";

configDotenv();

const app = express();

app.use(compression());
app.use(cors());
app.use(json());

app.use(router);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log(`Connected to MongoDB...`);
    app.listen(process.env.PORT, ()  => {
        console.log(`Server is up and running at ${process.env.SERVER}:${process.env.PORT}`)
    });
}).catch((err) => console.log(`Error to connecting to MongoDB:${err}`));