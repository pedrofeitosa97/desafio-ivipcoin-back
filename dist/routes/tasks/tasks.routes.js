"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_controllers_1 = require("../../controllers/tasks.controllers");
const ensureAuth_middleware_1 = __importDefault(require("../../middlewares/ensureAuth.middleware"));
const userRoutes = (0, express_1.Router)();
userRoutes.post('/tasks', ensureAuth_middleware_1.default, tasks_controllers_1.createTaskController);
userRoutes.get('/tasks', tasks_controllers_1.listTasksController);
userRoutes.get('/tasks/:id', tasks_controllers_1.listTaskByIdController);
userRoutes.patch('/tasks/:id', tasks_controllers_1.updateTaskController);
userRoutes.delete('/tasks/:id', tasks_controllers_1.deleteTaskController);
exports.default = userRoutes;
