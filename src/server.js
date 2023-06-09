import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import connectDb from "./config/connectDB";
import cors from "cors";
require("dotenv").config();

let app = express();
app.use(cors({ credentials: true, origin: true }));
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

connectDb();

let port = process.env.PORT;
app.listen(port, () => {
  console.log("Hello server dd: ", port);
});
