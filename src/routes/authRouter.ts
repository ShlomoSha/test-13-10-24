import { Router } from "express"
import { login, logout } from "../controllers/authControler"

const authRouter: Router = Router()

authRouter.post('/login', login)

authRouter.delete('/loguot', logout)

export default authRouter