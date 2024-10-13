import { Router } from "express"
import { registerStudent, registerTeacher } from "../controllers/registerControler"

const registerRouter: Router = Router()

registerRouter.post('/teacher', registerTeacher)

registerRouter.post('/student', registerStudent)

export default registerRouter