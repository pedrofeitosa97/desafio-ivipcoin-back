import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const userLoginService = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(`Logged in user: ${user.uid}`);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default userLoginService;