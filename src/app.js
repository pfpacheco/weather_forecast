import Cors from "cors";
import express, {json} from "express";
import compression from "compression";
import {configDotenv} from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/route.js";

configDotenv();

const app = express();

app.use(compression());
app.use(Cors());
app.use(json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log(`Connected to MongoDB...`);
    app.listen(process.env.PORT, ()  => {
        console.log(`Server is up and running at ${process.env.SERVER}:${process.env.PORT}`)
    });
}).catch((err) => console.log(`Error to connecting to MongoDB:${err}`));