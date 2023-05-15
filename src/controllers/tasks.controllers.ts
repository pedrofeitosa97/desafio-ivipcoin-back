import { Request, Response } from "express";
import createTaskService from "../services/tasks/createTasks.services";
import listTasksService from "../services/tasks/listTasks.services";
import updateTaskService from "../services/tasks/updateTask.services";
import deleteTaskService from "../services/tasks/deleteTask.service";
import { createTaskSchema, updateTaskSchema } from "../schemas/schemas";
import { ValidationError } from "yup";

const createTaskController = async (req: any, res: Response): Promise<Response> => {
    const data = req.body
    const userId = req.user.id
    const username = req.user.name
    const photourl = req.user.picture
    try {
        const task = await createTaskService(data, userId, username, photourl)
        const validatedTask = await createTaskSchema.validate(task, { abortEarly: false })
        return res.json(validatedTask)
    } catch (error: ValidationError | any) {
        return res.status(401).json({message: error.errors})
    }
}

const listTasksController = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await listTasksService()
    return res.json(tasks)
}

const listTaskByIdController = async (req: Request, res: Response): Promise<Response> => {
    const id: any = req.params.id
    const tasks = await listTasksService();
    const filteredTasks: any = tasks.filter((task: any) => task.owner.user_id === id);
    if (filteredTasks.length == 0) {
        return res.status(404).json({message:'Usuário não encontrado.'})
    }
    return res.json(filteredTasks);
}

const updateTaskController = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body
    const id = req.params.id
    try {
        const validatedUpdatedTask = await updateTaskSchema.validate(data, {abortEarly: false})
        const updatedTask = await updateTaskService(id, validatedUpdatedTask)
        return res.status(200).json(updatedTask)
    } catch (error: ValidationError | any) {
        console.log(error)
        return res.status(400).json({message: error.errors[0]})
    }
}

const deleteTaskController = (req: Request, res: Response): Response => {
    const id = req.params.id
    deleteTaskService(id)
    return res.status(204).json({})
}

export { createTaskController, listTasksController, updateTaskController, deleteTaskController, listTaskByIdController }