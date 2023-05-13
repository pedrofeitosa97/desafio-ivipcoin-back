import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  photoURL: string;
}

const registerUserService = async (userData: RegisterUserData) => {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    const user = userCredential.user;

    // Atualiza o nome do usuário
    await updateProfile(user, {
        displayName: userData.name,
        photoURL: userData.photoURL
    });

    console.log(user.uid)
    
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default registerUserService;