import { Router } from "express";
import { createTaskController,listTasksController,updateTaskController,deleteTaskController, listTaskByIdController } from "../../controllers/tasks.controllers";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";

const userRoutes: Router = Router()

userRoutes.post('/tasks', ensureAuthMiddleware, createTaskController)
userRoutes.get('/tasks', listTasksController)
userRoutes.get('/tasks/:id', listTaskByIdController)
userRoutes.patch('/tasks/:id', updateTaskController)
userRoutes.delete('/tasks/:id', deleteTaskController)

export default userRoutes