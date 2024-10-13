import { Router } from "express"
import { onlyTeacher } from "../middleware/authmiddleware"
import { addGrade, getAllGrades, getClassAverage, getGradesById, putGrade } from "../controllers/gradesControler"

const gradesRouter: Router = Router()

gradesRouter.post('/addGrade',onlyTeacher, addGrade as any)

gradesRouter.put('/putGrade', onlyTeacher, putGrade as any)

gradesRouter.get('/:id', getGradesById as any)

gradesRouter.get('/classAverage', onlyTeacher, getClassAverage as any)

gradesRouter.post('/allGrades', onlyTeacher, getAllGrades as any)

export default gradesRouter