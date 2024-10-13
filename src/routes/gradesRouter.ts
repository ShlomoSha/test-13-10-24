import { Router } from "express"
import { onlyTeacher } from "../middleware/authmiddleware"

const gradesRouter: Router = Router()

gradesRouter.post('/addGrade',onlyTeacher, )

gradesRouter.put('/putGrade', onlyTeacher, )

gradesRouter.get('/:id', )

gradesRouter.get('/classAverage', onlyTeacher, )

gradesRouter.post('/allGrades', onlyTeacher, )

export default gradesRouter