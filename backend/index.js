import express from "express";
import connectDB from "./database/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 8000;
connectDB();
app.listen(PORT, () => console.log(`Ok in ${PORT}`));
