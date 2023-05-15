import { getAuth, signInWithEmailAndPassword, signInWithCustomToken} from "firebase/auth";
import { AppError } from "../../error";
import { iValidatedBody } from "../../interfaces/createtask.interface";

const userLoginService = async (data: iValidatedBody) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    return [user, 200]
  } catch (error: any) {
    return [{message: 'Credenciais inválidas'}, 401]
  }
};

export default userLoginService;