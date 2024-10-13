import { Request, Response } from "express"
import { loginTheCollage } from "../services/authService"

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = await loginTheCollage(req.body)
        res.cookie('token', token)
        res.json({
            message: `welcome ${req.body.name}`
        })
    } catch (err) {
        res.status(400).send(err)
    }
}

export const logout  = async (req: Request, res:Response) => {
    try {
        res.clearCookie('token')
        res.status(200).json({
            message: 'you out'
        })
    } catch (err) {
        res.sendStatus(500)
    }
}