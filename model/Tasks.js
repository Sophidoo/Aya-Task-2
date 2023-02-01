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
    startTime: {
        type: Date,
        required: [true, "Please Enter the task start time"]
    },
    endTime: {
        type: Date,
        required: [true, "Please enter thetask end time"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
},
{
    timestamps: true,
    toJSON: {virtuals: true}
}) 

const Tasks = mongoose.model("Tasks", tasksSchema);

export default Tasks;