import { doc, updateDoc, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../server";
import { ValidationError } from "yup";

const updateTaskService = async (id: string, data: any) => {
  try {
    const db = getFirestore(firebaseApp);
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, data);
    const updatedTask = { id, ...data };
    return updatedTask;
  } catch (error: ValidationError | any) {
    return [{message: error.code}, 401]
  }
  };
  
  export default updateTaskService;