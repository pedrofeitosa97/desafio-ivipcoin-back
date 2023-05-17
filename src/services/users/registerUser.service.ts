import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { ValidationError } from 'yup';

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  photoURL: string;
}

const registerUserService = async (userData: RegisterUserData) => {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: userData.name,
      photoURL: userData.photoURL,
    });
    return [user, 200];
  } catch (error: ValidationError | any) {
    return [{ message: error.code }, 401];
  }
};

export default registerUserService;
