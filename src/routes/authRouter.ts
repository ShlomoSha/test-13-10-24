import { Router } from "express"
import { login } from "../controllers/authControler"

const authRouter: Router = Router()

authRouter.post('/login', login)

authRouter.delete('/loguot', )

export default authRouter