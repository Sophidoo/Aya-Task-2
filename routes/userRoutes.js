import { deleteASpecificUser, getAllUsersController, getSpecificUserController, updateUserDetailsController, updateUserPasswordController, userLoginController, userRegisterController } from "../controller/userController.js";
import express from "express";
import { isLogin } from "../middleware/isLogin.js";


const userRoute = express.Router();

// Create a new User
userRoute.post("/register", userRegisterController);

// Verify User Login Details
userRoute.post("/login", userLoginController);

// Get a specific user
userRoute.get("/specificUser", isLogin, getSpecificUserController);

// Get all users
userRoute.get("", getAllUsersController);

// Update User details
userRoute.put("/update", updateUserDetailsController);

// update user password
userRoute.put("/updatepassword", updateUserPasswordController);

// Delete a specific User
userRoute.delete("/delete", deleteASpecificUser);

export default userRoute;