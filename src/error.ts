import express, {Application} from 'express'

const app: Application = express()

app.use(express.json())

app.post('/login', (request, response) => {
    response.json([{message: 'rota de login criada'}])
})

export default app;