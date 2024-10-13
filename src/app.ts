import exp, {Express} from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectToMongo } from './config/dbConnect'
import swaggerUi from 'swagger-ui-express'
import { specs } from './config/swaggerCongig'
import authRouter from './routes/authRouter'
import registerRouter from './routes/registerRouter'
import gradesRouter from './routes/gradesRouter'

const app: Express = exp()
dotenv.config()
connectToMongo()
const port = process.env.PORT || 3000

app.use(exp.json())
app.use(cookieParser())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use('auth', authRouter)
app.use('register', registerRouter)
app.use('grades', gradesRouter)

app.listen(port, () => console.log(`server up and running in http://localhost:${port}`))