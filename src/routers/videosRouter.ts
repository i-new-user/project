
import { Request, Response, Router } from "express"
import { body } from "express-validator"
import {videos} from '../dataDB.ts/dataDB_videos'




export const videosRouter = Router()



videosRouter.get('/', (req: Request, res: Response) => {
    res.send(videos)
})

videosRouter.get('/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const video = videos.find(v => v.id === id)
    return !video ? res.sendStatus(404) : res.json(video)
})

videosRouter.post('/:id', (req: Request, res: Response) => {
   const createVideo = {
    id: +(new Date().toISOString()),
    title: req.body.title,
   }
   
})

// videosRouter.put('/', (req: Request, res: Response) => {
//     res.send(videos)
// })

// videosRouter.delete('/', (req: Request, res: Response) => {
//     res.send(videos)
// })