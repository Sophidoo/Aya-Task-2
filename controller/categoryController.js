import Category from "../model/Category.js";

export const createCategoryController = async(req, res) => {
    const {categoryname} = req.body;
    try{
        const categoryExist = await Category.findOne({categoryname});

        if(categoryExist){
            res.json({
                status: "error",
                message: "Categoray Already Exist"
            })
        }

        const category = await Category.create({
            categoryname,
            user: req.userAuth
        })

        res.json({
            status: "success",
            data: category
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

export const editCategoryController = async(req, res) => {
    try{
        const category = await Category.findOneAndUpdate(req.categoryname, {
            $set: {
                categoryname: req.body.categoryname
            }
        },{
            new: true        
        })

        res.json({
            status: "success",
            data: category
        })
    }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
    }
}

export const getAllCategoriesController = async(req, res) => {
    try{
        const category = await Category.find()
        const userCategories = category.filter(u => u.user == req.userAuth)

        res.json({
            status: "success",
            data: userCategories
        })
    }catch(error){
        res.json({
            statsus: "error",
            message: "An error occured"
        })
    }
}

export const deletCategoryController = async(req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.id)

        res.json({
            status: "success",
            message: "Deleted Successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
    }
}