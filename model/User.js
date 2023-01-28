import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "firstname": {
        type: String,
        required: [true, "Firstname is Required"]
    },
    "lastname": {
        type: String,
        required: [true, "Lastname is Required"]
    },
    "otherName": {
        type: String
    },
    "profilePicture": {
        type: String
    },
    "email": {
        type: String,
        required: [true, "Email Address is Required"]
    },
    "password": {
        type: String,
        required: [true, "Password is Required"]
    },
    "confirmPassword": {
        type: String,
        required: [true, "Please Confirm password"]
    }
},
{
    timestamps: true,
    toJSON: {virtuals: true}
})

const User = mongoose.model("User", userSchema)
export default User;