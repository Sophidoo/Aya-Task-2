import mongoose from "mongoose";
import Tasks from "./Tasks";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "Category name is required"]
    },
    tasks: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Tasks"
    }]
},
{
    timestamps: true,
    toJson: {virtuals: true}
})

const Category = mongoose.model("Category", categorySchema)

export default Category