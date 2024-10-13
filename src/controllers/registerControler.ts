import { Request, Response } from "express";
import { createStudent, createTeacher } from "../services/registerService";

export const registerTeacher = async (req: Request, res: Response) => {
    try {
        await createTeacher(req.body)
        res.status(201).json({
            message: 'user created'
        })
    } catch (err:any) {
        res.status(400).json({
            err: true,
            message: err.message
        })
    }
}

export const registerStudent = async (req: Request, res: Response) => {
    try {
        await createStudent(req.body)
        res.status(201).json({
            err: false,
            message: 'user created'
        })
    } catch (err:any) {
        res.status(400).json({
            err: true,
            message: err.message
        })
    }
}