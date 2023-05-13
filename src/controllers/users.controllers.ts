import { Request, Response } from "express";
import registerUserService from "../services/users/registerUser.service";
import userLoginService from "../services/users/userLogin.service";

const registerUserController = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password, photoURL } = req.body;
  try {
    const user = await registerUserService({ name, email, password, photoURL });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: "Erro ao registrar o usuário." });
  }
};

const userLoginController = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
  
    try {
      const user = await userLoginService(email, password);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }
  };

export { registerUserController, userLoginController};