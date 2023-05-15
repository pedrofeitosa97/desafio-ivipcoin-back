"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lite_1 = require("firebase/firestore/lite");
const server_1 = require("../../server");
const createTaskService = async (data, userId, username, photo) => {
    const db = (0, lite_1.getFirestore)(server_1.firebaseApp);
    try {
        const taskData = data;
        const now = new Date();
        const taskRef = await (0, lite_1.addDoc)((0, lite_1.collection)(db, 'tasks'), {
            ...taskData,
            owner: {
                user_id: userId,
                username: username,
            },
            picture: photo,
            created_at: now.toISOString()
        });
        const task = {
            id: taskRef.id,
            ...taskData,
            owner: {
                user_id: userId,
                username: username
            },
            created_at: now.toISOString()
        };
        return task;
    }
    catch (error) {
        console.error(error);
        return 'Erro ao criar a tarefa.';
    }
};
exports.default = createTaskService;
