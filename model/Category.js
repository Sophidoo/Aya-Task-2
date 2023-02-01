import mongoose from "mongoose";
import Tasks from "./Tasks";

const categorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: [true, "Category name is required"]
    }
},
{
    timestamps: true,
    toJson: {virtuals: true}
})

const Category = mongoose.model("Category", categorySchema)

export default Category