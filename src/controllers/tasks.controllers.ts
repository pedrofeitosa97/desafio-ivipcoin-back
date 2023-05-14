import { Request, Response } from "express";
import createTaskService from "../services/tasks/createTasks.services";
import listTasksService from "../services/tasks/listTasks.services";
import updateTaskService from "../services/tasks/updateTask.services";
import deleteTaskService from "../services/tasks/deleteTask.service";

const createTaskController = async (req: any, res: Response): Promise<Response> => {
    const data = req.body
    const userId = req.user.id
    const username = req.user.name
    const task = await createTaskService(data, userId, username)
    return res.json(task)
}

const listTasksController = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await listTasksService()
    return res.json(tasks)
}

const listTaskByIdController = async (req: Request, res: Response): Promise<Response> => {
    const id: any = req.params.id
    const tasks = await listTasksService();
    const filteredTasks: any = tasks.filter((task: any) => task.created_by === id);
    return res.json(filteredTasks);
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

export { createTaskController, listTasksController, updateTaskController, deleteTaskController, listTaskByIdController }