import { iCreateTask } from "../../interfaces/createtask.interface";
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../server";

const createTaskService: any = async (data: iCreateTask, userId: string, username: string, photo: string) => {
  const db = getFirestore(firebaseApp);
  try {
      const taskData = data;
      const now = new Date();
      const taskRef = await addDoc(collection(db, 'tasks'), 
      {
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
      return task
    } catch (error) {
      console.error(error);
      return 'Erro ao criar a tarefa.'
    }
}

export default createTaskService