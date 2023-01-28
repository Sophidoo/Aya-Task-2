import express from "express";
import { dbConnect } from "./config/dbConnect.js";
import dotenv from "dotenv";

dotenv.config()
dbConnect();

const app = express();

const PORT = process.env.Port || 3000
app.listen(PORT, console.log(`Server is running at ${PORT}`))