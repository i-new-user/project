
import { Request, Response, Router } from "express"
import {videosRepositories} from '../db/db_videos'
import {HTTP_STATUSES} from '../http_statuses'



export const videosRouter = Router()



videosRouter.get('/', (req: Request, res: Response) => {
    const foundVideos = videosRepositories.searchVideos(req.query.title?.toString())
    res.send(foundVideos)
})


videosRouter.get('/:id', (req: Request, res: Response) => {
    const video = videosRepositories.searchVideosById(+req.params.id)
    !video ? res.status(HTTP_STATUSES.NOT_FOUND_404) : 
             res.status(HTTP_STATUSES.OK_200).json(video)
})


videosRouter.post('/', (req: Request, res: Response) => {
    const error = {"errorsMessages":[{
                       "message": "If video for passed id doesn't exist",
                        "field": "If video for passed id doesn't exist"
                    }]
                  }
    const body = videosRepositories.searchVideos(req.body)
    const title = videosRepositories.searchVideos(req.body.title)
    const author = videosRepositories.searchVideos(req.body.author)
    const availableResolutions = videosRepositories.searchVideos(req.body.availableResolutions)
   
   !title || title.length > 40 || typeof title !== 'string' ||
   !author || author.length > 20  || typeof author !== 'string' || 
   availableResolutions.length < 1
    
   ? res.status(HTTP_STATUSES.NOT_FOUND_404).json(error) 
   : res.sendStatus(HTTP_STATUSES.CREATED_201).json(body)
})



videosRouter.put('/videos/:id', (req: Request, res: Response) => {
    const error = {"errorsMessages":[{
                        "message": "If video for passed id doesn't exist",
                        "field": "If video for passed id doesn't exist"
                    }]
                   }
    const title = videosRepositories.searchVideos(req.body.title)
    const author = videosRepositories.searchVideos(req.body.author)
    const availableResolutions = videosRepositories.searchVideos(req.body.availableResolutions)
    const canBeDownloaded = videosRepositories.searchVideos(req.body.canBeDownloaded)
    const minAgeRestriction = videosRepositories.searchVideos(req.body.minAgeRestriction)
    const publicationDate = videosRepositories.searchVideos(req.body.publicationDate)
                                
    const isUpdated = videosRepositories.updateVideo(+req.params.id, req.body.title)
    if(isUpdated){
      const video = videosRepositories.searchVideosById(+req.params.id)
        res.send(video)
    }else{
        res.status(HTTP_STATUSES.NOT_FOUND_404).json(error)
    }
   
})



videosRouter.delete('/:id', (req: Request, res: Response) => {
    let isDeleded = videosRepositories.deleteVideoById(+req.params.id)
    isDeleded ? res.status(HTTP_STATUSES.NO_CONTENT_204) : res.status(HTTP_STATUSES.NOT_FOUND_404)
})
