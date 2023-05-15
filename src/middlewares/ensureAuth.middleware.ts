import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

interface DecodedJwt {
    sub: string,
    name: string,
    picture: string
  }

const ensureAuthMiddleware = async (req: any, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    
    if(!token) {
      return "TOKEN INVÁLIDO!"
    }
    
    token = token.split(' ')[1]
    
    const decodedtoken = jwt.decode(token) as DecodedJwt;
    
    req.user = {
        id: decodedtoken?.sub,
        name: decodedtoken?.name,
        picture: decodedtoken?.picture
    }
    
      return next()
}

export default ensureAuthMiddleware