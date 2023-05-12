import { doc, updateDoc, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../server";

const updateTaskService = async (id: string, data: any) => {
    const db = getFirestore(firebaseApp);
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, data);
    const updatedTask = { id, ...data };
    return updatedTask;
  };
  
  export default updateTaskService;