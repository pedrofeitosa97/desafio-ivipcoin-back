import express, { Application } from 'express';
import taskRoutes from './routes/tasks/tasks.routes';
import userRoutes from './routes/users/users.routes';
import cors from 'cors';

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('', taskRoutes)
app.use('', userRoutes)

export default app;