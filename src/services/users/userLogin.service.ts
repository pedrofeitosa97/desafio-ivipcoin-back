import { getAuth, signInWithEmailAndPassword, signInWithCustomToken} from "firebase/auth";

const userLoginService = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default userLoginService;