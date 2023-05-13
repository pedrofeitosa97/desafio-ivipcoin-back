import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../../server';

const listTaskByIdService = async (id: string) => {
  try {
    const db = getFirestore(firebaseApp);
    const taskCollection = collection(db, 'tasks');
    const q = query(taskCollection, where('created_by', '==', id));
    const taskSnapshot = await getDocs(q);
    const tasks = taskSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return tasks;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao listar as tarefas.');
  }
};

export default listTaskByIdService;