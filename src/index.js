import dotenv  from "dotenv"
import express, {json} from "express";
dotenv.config();

const app = express();

const servername = process.env.SERVERNAME_ENV;
const serverport = process.env.SERVERPORT_ENV;

app.use(json);
app.listen(serverport, () => {
    console.log(`Server is running on host : ${servername} @ port : ${serverport}`);
});