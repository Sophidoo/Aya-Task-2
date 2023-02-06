import Tasks from "../model/Tasks.js"
import Users from "../model/User.js"

export const createTaskController = async (req, res) => {
    const {taskName, isCompleted, endTime, category} = req.body;

    try{
        const task = await Tasks.create({
            taskName,
            isCompleted,
            endTime,
            category,
            user: req.userAuth

        })

        res.json({
            status: "success",
            data: task
        })
        
    }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
    }
} 


export const editTaskController = async(req, res) => {
    
    try{
        await Tasks.findByIdAndUpdate(req.params.id, {
            $set: {
                taskName: req.body.taskName,
                endTime: req.body.endTime,
                category: req.body.category
            }
        },{
            new: true
        })

        res.json({
            status: "success",
            data: "Updated Successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
    }
}


export const editTaskCompleteController = async(req, res) => {
    
    try{
        await Tasks.findByIdAndUpdate(req.params.id, {
            $set: {
                isCompleted: req.body.isCompleted
            }
        },{
            new: true
        })

        res.json({
            status: "success",
            data: "Updated Successfully"
        })
    }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
    }
}

export const getAllTaskController = async(req, res) => {
    
    try{
        const tasks = await Tasks.find();
        const userTasks = tasks.filter(u => u.user == req.userAuth)

        res.json({
            status: "success",
            data: userTasks
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

export const getAllTasktoCategory = async(req, res) => {
    
    try{
        const tasks = await Tasks.find();
        const userTasks = tasks.filter(u => u.user == req.userAuth && u.category == req.params.category)

        console.log(req.params.category)
        res.json({
            status: "success",
            data: userTasks
        })
    }catch(error){
        res.json({
            status: "error",
            message: error.message
        })
    }
}

export const deletTaskController = async(req, res) => {
     try{
        await Tasks.findByIdAndDelete(req.params.id)

        res.json({
            status: "success",
            message: "task deleted successfully"
        })

     }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
     }
}