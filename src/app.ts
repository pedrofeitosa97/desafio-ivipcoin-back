import express, { Application } from 'express';
import taskRoutes from './routes/tasks/tasks.routes';
import userRoutes from './routes/users/users.routes';

const app: Application = express()

app.use(express.json())

app.use('', taskRoutes)
app.use('', userRoutes)

export default app;