import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const ensureAuthMiddleware = async (req: any, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if(!token) {
        return "TOKEN INVÁLIDO!"
    }

    token = token.split(' ')[1]
    
    const decodedtoken = jwt.decode(token)
    
    req.user = {
        id: decodedtoken?.sub
    }
          
      return next()
}

export default ensureAuthMiddleware