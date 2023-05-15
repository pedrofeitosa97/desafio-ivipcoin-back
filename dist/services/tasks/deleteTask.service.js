"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lite_1 = require("firebase/firestore/lite");
const server_1 = require("../../server");
const deleteTaskService = async (id) => {
    const db = (0, lite_1.getFirestore)(server_1.firebaseApp);
    try {
        const taskRef = (0, lite_1.doc)(db, "tasks", id);
        await (0, lite_1.deleteDoc)(taskRef);
        return "Tarefa excluída com sucesso";
    }
    catch (error) {
        console.error(error);
        return "Erro ao excluir a tarefa.";
    }
};
exports.default = deleteTaskService;
