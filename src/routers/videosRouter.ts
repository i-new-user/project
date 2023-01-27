
import { Request, Response, Router } from "express"
import {videos} from '../dataDB.ts/dataDB_videos'




export const videosRouter = Router()



videosRouter.get('/', (req: Request, res: Response) => {
    res.send(videos)
})