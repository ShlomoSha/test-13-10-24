import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import IToken from '../types/interfaces/itoken'

export const onlyTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token       
        const userData: IToken = await jwt.verify(token, process.env.TOKEN_DECRET!) as IToken
        if (userData.role != 'teacher') {
            res.status(403).send('You have no access')
        }
        next()
    } catch (err:any) {
        console.log(err)
        res.status(401).send(err.message)
    }
}