import iCreateTask from "../../interfaces/createtask.interface";
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../server";

const createTaskService = async (data: iCreateTask, userId: string) => {
    const db = getFirestore(firebaseApp);
    try {
        const taskData = data; // Obtém os dados da tarefa a ser criada a partir do corpo da solicitação
        const taskRef = await addDoc(collection(db, 'tasks'), {created_by: userId, ...taskData}); // Adiciona a tarefa ao Firestore
        const task = { 
          id: taskRef.id,
          created_by: userId,
           ...taskData
           }; // Cria um objeto com o ID da tarefa e seus dados
        return task
      } catch (error) {
        console.error(error);
        return 'Erro ao criar a tarefa.'
      }
}

export default createTaskService