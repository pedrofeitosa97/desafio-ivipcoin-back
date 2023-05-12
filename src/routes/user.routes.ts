import { Request, Response, Router } from "express";

const userRoutes: Router = Router()

userRoutes.post('/tasks', (req: Request, res: Response) => {
    return res.json({message: 'Rota criada'})
})

export default userRoutes