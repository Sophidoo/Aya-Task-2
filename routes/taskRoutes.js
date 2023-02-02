import { addTaskController } from "../controller/taskController.js";
import express from "express";
import { isLogin } from "../middleware/isLogin.js";


const userRoute = express.Router();

// Create a new User
userRoute.post("/task", isLogin, addTaskController);
