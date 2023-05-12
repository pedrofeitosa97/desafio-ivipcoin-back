import { getFirestore, doc, deleteDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../server";

const deleteTaskService = async (id: string) => {
  const db = getFirestore(firebaseApp);
  try {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
    return "Tarefa excluída com sucesso";
  } catch (error) {
    console.error(error);
    return "Erro ao excluir a tarefa.";
  }
};

export default deleteTaskService;