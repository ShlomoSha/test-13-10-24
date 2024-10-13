import { Request, Response } from "express";
import { createStudent, createTeacher } from "../services/registerService";

export const registerTeacher = async (req: Request, res: Response) => {
    try {
        await createTeacher(req.body)
        res.status(201).json({
            message: 'user created'
        })
    } catch (err) {
        res.status(400).send(err)
    }
}

export const registerStudent = async (req: Request, res: Response) => {
    try {
        await createStudent(req.body)
        res.status(201).json({
            message: 'user created'
        })
    } catch (err) {
        res.status(400).send(err)
    }
}