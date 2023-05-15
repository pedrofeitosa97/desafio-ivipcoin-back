import { Request, Response } from "express";
import registerUserService from "../services/users/registerUser.service";
import userLoginService from "../services/users/userLogin.service";
import { loginSchema } from "../schemas/schemas";
import { registerSchema } from "../schemas/schemas";
import { ValidationError } from "yup";

const registerUserController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const validatedRegister = await registerSchema.validate(req.body, {abortEarly: false})
    const { name, email, password, photoURL } = validatedRegister
    const user = await registerUserService({ name, email, password, photoURL });
    const [message, status]: any = user
    return res.status(status).json(message);
  } catch (error: ValidationError | any) {
    console.log(error)
    return res.status(400).json({ message: error.errors[0] });
  }
};

const userLoginController = async (req: any, res: Response): Promise<Response> => {
  try {
    const validatedLogin = await loginSchema.validate(req.body, { abortEarly: false })
    const user = await userLoginService(validatedLogin)
    const [message, status]: any = user
    return res.status(status).json(message)
  } catch (error: ValidationError | any) {
      return res.status(401).json({ message: error.errors[0] })
    }
};

export { registerUserController, userLoginController}