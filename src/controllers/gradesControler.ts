import { addGradeToStudentById } from "../services/gradesService"

export const addGrade = async (req: any, res: Response): Promise<void> => {
    try {
        const result = await addGradeToStudentById(req.params.id, req.body)
    } catch (err) {
        
    }
}

export const putGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        
    }
}

export const getGradesById = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        
    }
}

export const getClassAverage = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        
    }
}

export const getAllGrades = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        
    }
}