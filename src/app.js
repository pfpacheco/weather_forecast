import compression from "compression"
import Cors from "cors";
import dotenv  from "dotenv"
import ejs from "ejs";
import express, {json} from "express";
import router from "./routes/route.js"


dotenv.config();

const app = express();

const servername = process.env.SERVERNAME_ENV;
const serverport = process.env.SERVERPORT_ENV;

app.use(Cors());
app.use(compression());
app.use(json());
app.use(router);

app.engine("html", ejs.renderFile);
app.set("views engine", "html");
app.use(express.static("views", ));

app.listen(serverport, () => {
    console.log(`Server is running on host : ${servername} @ port : ${serverport}`);
});