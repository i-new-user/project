import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {body} from 'express-validator'
import * as dotenv from 'dotenv'
dotenv.config()
// import {videosRouter} from './routers/videosRouter'
import { nextTick } from 'process'




export const app = express()
const PORT = process.env.PORT

const parserMiddleware = bodyParser.json()
const corsMiddleware = cors()

app.use(parserMiddleware)
app.use(corsMiddleware)



const HTTP_STATUSES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUST_400: 400,
    NOT_FOUND_404: 404
}


app.get('/', (req: Request, res: Response) => {
    res.send(`<h1>Node js => Express => Typescript</h1>`)
})


let videos = [
       {
              id: 1,
              title: "111111111111",
              author: "it-incubator",
              canBeDownloaded: false,
              minAgeRestriction: null,
              createdAt: +(new Date().toISOString()),
              publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
              availableResolutions: ["P144"]
        },
        {
            id: 2,
            title: "2222222222",
            author: "it-incubator",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: +(new Date().toISOString()),
            publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
            availableResolutions: ["P144",]
      },
    ]
const error = {
    errorsMassages: [
        {
            massage: "incorrect title",
            field: "title"
        }
    ]
}    

app.get('/videos', (req: Request, res: Response) => {
    res.status(HTTP_STATUSES.OK_200).json(videos)
}) 

app.get('/videos/:id', (req: Request, res: Response) => {
    
    const id = +req.params.id;
    const video = videos.find(v => v.id === id)

    video  ? res.status(HTTP_STATUSES.NOT_FOUND_404).json(error)
    : res.status(HTTP_STATUSES.OK_200).json(videos)
})

app.post('/videos', (req: Request, res: Response) => {
    
    const title = req.body.title;
    
    if(!title || title.length > 40 || typeof title !== 'string' || !title.trim() ){
        res.status(HTTP_STATUSES. BAD_REQUST_400).json(error)
        return;
    } else {
        const newVideo = {
            id: +new Date().toISOString(),
            title: "111111111111",
            author: "it-incubator",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: +(new Date().toISOString()),
            publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
            availableResolutions: ["P144"]
        }

        videos.push(newVideo)
        res.status(HTTP_STATUSES.CREATED_201).json(newVideo)
    }
})

app.put('/videos/:id', (req: Request, res: Response) => {
    
    const title = req.body.title;
    
    if(!title || title.length > 40 || typeof title !== 'string' || !title.trim() ){
        res.status(HTTP_STATUSES.BAD_REQUST_400).json(error)
        return;
    } else {
        
        const id = +req.params.id;
        const video = videos.find(v => v.id = id)

        if(video){
            res.status(HTTP_STATUSES.NO_CONTENT_204).json(video)
        }else{
            res.status(HTTP_STATUSES.NOT_FOUND_404)
        }
    }
})
 
app.delete('/videos/:id', (req: Request, res: Response) => {
    
    const id = +req.params.id;
    const newVideo = videos.filter(v => v.id !== id)
    
    newVideo.length < videos.length 
    ? res.status(HTTP_STATUSES.NO_CONTENT_204)
    : res.status(HTTP_STATUSES.NOT_FOUND_404)
})





















    //   app.use('/videos', videosRouter)


app.listen(PORT, () => {
    console.log(`[server]: Server is rooning at http://localhost${PORT}`)
})