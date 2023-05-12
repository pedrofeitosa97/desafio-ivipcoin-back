import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../server";

const listTasksService = async () => {
    const db = getFirestore(firebaseApp);
    try {
        const taskCollection = collection(db, 'tasks');
        const taskSnapshot = await getDocs(taskCollection);
        const tasks = taskSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return tasks;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao listar as tarefas.')
    }
}

export default listTasksService;