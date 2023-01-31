import Users from "../model/User.js";
import bcrypt from "bcrypt";
import generateToken from "../util/generateToken.js";

export const userRegisterController = async(req, res) => {
    const{firstname, lastname, othername, email, password} = req.body;

    try{
        const userFound = await Users.findOne({email});

        if(userFound){
            return res.json({
                status: "error",
                data: "User Already Exists"
            })
        }

        const salt = await bcrypt.genSalt(5);
        const passwordHash = await bcrypt.hash(password, salt)
        
        const User = await Users.create({
            firstname,
            lastname,
            othername,
            email,
            password: passwordHash
        })

        res.json({
            status: "success",
            data: User
        })
    }catch(error){
        res.json(error.message)
    }
}


export const userLoginController = async(req, res) => {
    const {email, password} = req.body;

    try{
        const userFound = await Users.findOne({email});

        if(!userFound){
            return res.json({
                status: "error",
                message: "Wrong Login details"
            })
        }

        const passwordFound = await bcrypt.compare(password, userFound.password)
        if(!passwordFound){
            res.json({
                status: "error",
                message: "Incorrect Password"
            })
        }else{
            res.json({
                status: "success",
                data: {
                    userFound,
                    token: generateToken(userFound._id)
                }
            })
        }
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

export const getAllUsersController = async(req, res) => {
    
    try{
        const allUsers = await Users.find();

        res.json({
            status: "success",
            data: allUsers
        })

    }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
    }

    
}

export const getSpecificUserController = async(req, res) => {
    try{
        const userFound = await Users.findById(req.UserAuth);

        if(userFound){
            res.json({
                status: "Success",
                data: userFound
            });
        }else{
            res.json({
                status: "Success",
                message: "User does not exist"
            });
        }
    }catch(error){
        res.json(error.message);
    }
}

export const updateUserDetailsController = async(req, res) => {
    try{
        const userFound = await Users.findById(req.UserAuth);

        await Users.updateOne(req.UserAuth, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                othername: req.body.othername,
                email: req.body.email
            }
        },{
            new: true
        })
        res.json({
            status: "success",
            data: userFound
        })

    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}
export const updateUserPasswordController = async(req, res) => {
    try{
        const userFound = await Users.findById(req.UserAuth);

        const salt = await bcrypt.genSalt(5);
        const passwordHash = await bcrypt.hash(req.body.password, salt)

        await Users.updateOne(req.UserAuth, {
            $set: {
                password: passwordHash,
            }
        },{
            new: true
        })
        res.json({
            status: "success",
            data: userFound
        })

    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

export const deleteASpecificUser = async(req, res) => {
    await Users.findOneAndDelete(req._id);
}
