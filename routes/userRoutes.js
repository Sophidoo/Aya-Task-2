import { deleteASpecificUser, getAllUsersController, getSpecificUserController, updateUserDetailsController, updateUserPasswordController, userLoginController, userRegisterController } from "../controller/userController.js";
import express from "express";
import { isLogin } from "../middleware/isLogin.js";
import { createTaskController, getAllTaskController, getAllTasktoCategory } from "../controller/taskController.js";
import { createCategoryController, getAllCategoriesController } from "../controller/categoryController.js";

const userRoute = express.Router();

// Create a new User
userRoute.post("/register", userRegisterController);

// Verify User Login Details
userRoute.post("/login", userLoginController);

// Get a specific user
userRoute.get("/specificUser", isLogin, getSpecificUserController);

// Get all users
userRoute.get("", getAllUsersController);

// get all task for a logged in user
userRoute.get("/task",isLogin, getAllTaskController);

// get all task for 
userRoute.get("/taskandcategory", isLogin, getAllTasktoCategory);

// Update User details
userRoute.put("/update",isLogin, updateUserDetailsController);

// update user password
userRoute.put("/updatepassword",isLogin, updateUserPasswordController);

// Delete a specific User
userRoute.delete("/delete", deleteASpecificUser);

// add task for a logged in user
userRoute.post("/task", isLogin, createTaskController);


export default userRoute;