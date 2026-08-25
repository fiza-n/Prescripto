import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import { errorHandler } from './middlewares/errorHandler.middleware.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use('/api/auth', authRoutes)


app.use(errorHandler)


export default app