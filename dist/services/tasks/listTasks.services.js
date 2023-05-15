"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lite_1 = require("firebase/firestore/lite");
const server_1 = require("../../server");
const listTasksService = async () => {
    const db = (0, lite_1.getFirestore)(server_1.firebaseApp);
    try {
        const taskCollection = (0, lite_1.collection)(db, 'tasks');
        const taskSnapshot = await (0, lite_1.getDocs)(taskCollection);
        const tasks = taskSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return tasks;
    }
    catch (error) {
        console.error(error);
        throw new Error('Erro ao listar as tarefas.');
    }
};
exports.default = listTasksService;
