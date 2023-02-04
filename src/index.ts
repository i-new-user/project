import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {body} from 'express-validator'
import * as dotenv from 'dotenv'
dotenv.config()
import {videosRouter} from './routers/videosRouter'
import { nextTick } from 'process'




export const app = express()
const PORT = process.env.PORT

const parserMiddleware = bodyParser.json()
const corsMiddleware = cors()

app.use(parserMiddleware)
app.use(corsMiddleware)



app.get('/', (req: Request, res: Response) => {
    res.send(`<h1>Node js => Express => Typescript</h1>`)
})

app.use('/videos', videosRouter)


app.listen(PORT, () => {
    console.log(`[server]: Server is rooning at http://localhost${PORT}`)
})