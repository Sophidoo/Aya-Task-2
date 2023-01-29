import express from "express";
import { dbConnect } from "./config/dbConnect.js";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";

dotenv.config()
dbConnect();

const app = express();

app.use(express.json());

app.use("api/v1/users", userRoute);

const PORT = process.env.PORT
app.listen(PORT, console.log(`Server is running at ${PORT}`))