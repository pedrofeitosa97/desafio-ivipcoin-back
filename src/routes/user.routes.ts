import { Request, Response, Router } from "express";
import { createTaskController, listTasksController, updateTaskController, deleteTaskController } from "../controllers/users.controllers";

const userRoutes: Router = Router()

userRoutes.post('/tasks', createTaskController)
userRoutes.get('/tasks', listTasksController)
userRoutes.patch('/tasks/:id', updateTaskController)
userRoutes.delete('/tasks/:id', deleteTaskController)

export default userRoutes