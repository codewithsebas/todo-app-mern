import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./database/database.js";
import Routes from "./routes/route.js"
import dotenv from "dotenv";
dotenv.config();

connectDB();
const app = express();
app.use(cors());

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', Routes)
const PORT = 8000;
app.listen(PORT, () => console.log(`Ok in ${PORT}`));
