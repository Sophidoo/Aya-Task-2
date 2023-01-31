import { deleteASpecificUser, getSpecificUserController, updateUserDetailsController, userLoginController, userRegisterController } from "../controller/userController.js";
import express from "express";


const userRoute = express.Router();

// Create a new User
userRoute.post("/register", userRegisterController);

// Verify User Login Details
userRoute.post("/login", userLoginController);

// Get a specific user
userRoute.get("/specificUser", getSpecificUserController);

// Get all users
// userRoute.get("", getAllUsersController);

// Update User details
userRoute.put("/update", updateUserDetailsController);

// Delete a specific User
userRoute.delete("/delete", deleteASpecificUser);

export default userRoute;