import { Request, Response } from "express";
import createTaskService from "../services/tasks/createTasks.services";
import listTasksService from "../services/tasks/listTasks.services";
import updateTaskService from "../services/tasks/updateTask.services";
import deleteTaskService from "../services/tasks/deleteTask.service";

const createTaskController = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body
    const task = await createTaskService(data)
    return res.json(task)
}

const listTasksController = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await listTasksService()
    return res.json(tasks)
}

const updateTaskController = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body
    const id = req.params.id
    const updatedTask = await updateTaskService(id, data)
    return res.json(updatedTask)
}

const deleteTaskController = (req: Request, res: Response): Response => {
    const id = req.params.id
    deleteTaskService(id)
    return res.json({})
}

export { createTaskController, listTasksController, updateTaskController, deleteTaskController }