import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "Your task require a name"]
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Date
    }
},
{
    timestamps: true,
    toJSON: {virtuals: true}
}) 

const Tasks = mongoose.model("Tasks", tasksSchema);

export default Tasks;