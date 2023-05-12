import { Router } from "express";
import { registerUserController, userLoginController } from "../../controllers/users.controllers";

const userRoutes: Router = Router()

userRoutes.post('/users', registerUserController)
userRoutes.post('/login', userLoginController)

export default userRoutes