import Tasks from "../model/Tasks.js"
import Users from "../model/User.js"

export const createTaskController = async (req, res) => {
    const {taskName, isCompleted, startTime, endTime, category} = req.body;

    try{

        const taskExist = await Tasks.findOne({taskName})

        if(!taskExist){
            const task = await Tasks.create({
                taskName,
                isCompleted,
                startTime,
                endTime,
                category,
                user: req.userAuth

            })

            res.json({
                status: "success",
                data: task
            })
        }else{
            res.json({
                status: "error",
                message: "Task Already exists"
            })
        }
    }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
    }
} 


export const editTaskController = async(req, res) => {
    
    try{
        const taskExist = await Tasks.findOne(req.taskName)

        await Tasks.updateOne(taskName, {
            $set: {
                taskName: req.body.taskName,
                isCompleted: req.body.isCompleted,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                category: req.body.category
            }
        },{
            new: true
        })

        res.json({
            status: "success",
            data: taskExist
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
        const task = await Tasks.findOneAndDelete(req.taskName)

        res.json({
            status: "success",
            message: "task delted successfully"
        })

     }catch(error){
        res.json({
            status: "error",
            message: "An error occured"
        })
     }
}