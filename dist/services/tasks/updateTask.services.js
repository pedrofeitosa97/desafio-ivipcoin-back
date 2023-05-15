"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lite_1 = require("firebase/firestore/lite");
const server_1 = require("../../server");
const updateTaskService = async (id, data) => {
    try {
        const db = (0, lite_1.getFirestore)(server_1.firebaseApp);
        const taskRef = (0, lite_1.doc)(db, "tasks", id);
        await (0, lite_1.updateDoc)(taskRef, data);
        const updatedTask = { id, ...data };
        return updatedTask;
    }
    catch (error) {
        return [{ message: error.code }, 401];
    }
};
exports.default = updateTaskService;
