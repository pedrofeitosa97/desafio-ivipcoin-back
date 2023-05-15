"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTaskByIdController = exports.deleteTaskController = exports.updateTaskController = exports.listTasksController = exports.createTaskController = void 0;
const createTasks_services_1 = __importDefault(require("../services/tasks/createTasks.services"));
const listTasks_services_1 = __importDefault(require("../services/tasks/listTasks.services"));
const updateTask_services_1 = __importDefault(require("../services/tasks/updateTask.services"));
const deleteTask_service_1 = __importDefault(require("../services/tasks/deleteTask.service"));
const schemas_1 = require("../schemas/schemas");
const createTaskController = async (req, res) => {
    const data = req.body;
    const userId = req.user.id;
    const username = req.user.name;
    const photourl = req.user.picture;
    try {
        const task = await (0, createTasks_services_1.default)(data, userId, username, photourl);
        const validatedTask = await schemas_1.createTaskSchema.validate(task, { abortEarly: false });
        return res.json(validatedTask);
    }
    catch (error) {
        return res.status(401).json({ message: error.errors });
    }
};
exports.createTaskController = createTaskController;
const listTasksController = async (req, res) => {
    const tasks = await (0, listTasks_services_1.default)();
    return res.json(tasks);
};
exports.listTasksController = listTasksController;
const listTaskByIdController = async (req, res) => {
    const id = req.params.id;
    const tasks = await (0, listTasks_services_1.default)();
    const filteredTasks = tasks.filter((task) => task.owner.user_id === id);
    if (filteredTasks.length == 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    return res.json(filteredTasks);
};
exports.listTaskByIdController = listTaskByIdController;
const updateTaskController = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    try {
        const validatedUpdatedTask = await schemas_1.updateTaskSchema.validate(data, { abortEarly: false });
        const updatedTask = await (0, updateTask_services_1.default)(id, validatedUpdatedTask);
        return res.status(200).json(updatedTask);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.errors[0] });
    }
};
exports.updateTaskController = updateTaskController;
const deleteTaskController = (req, res) => {
    const id = req.params.id;
    (0, deleteTask_service_1.default)(id);
    return res.status(204).json({});
};
exports.deleteTaskController = deleteTaskController;
