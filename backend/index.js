import express from "express";
import cors from "cors";
import connectDB from "./database/database.js";
import Routes from "./routes/route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Routes);

const PORT = 8000;
connectDB();
app.listen(PORT, () => console.log(`Ok in ${PORT}`));
