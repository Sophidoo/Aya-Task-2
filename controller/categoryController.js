import Category from "../model/Category.js";
import User from "../model/User.js";

export const createCategoryController = async(req, res) => {
    const {categoryname} = req.body;
    try{
        const userCategoryToBeAdded = await User.findById(req.userAuth);

        if(!userCategoryToBeAdded){
            res.json({
                status: "error",
                message: "User does not exist"
            })
        }

        const category = 
    }
}