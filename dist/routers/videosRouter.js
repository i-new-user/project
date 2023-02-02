"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const dataDB_videos_1 = require("../dataDB.ts/dataDB_videos");
exports.videosRouter = (0, express_1.Router)();
exports.videosRouter.get('/', (req, res) => {
    res.send(dataDB_videos_1.videos);
});
exports.videosRouter.get('/:id', (req, res) => {
    const id = +req.params.id;
    const video = dataDB_videos_1.videos.find(v => v.id === id);
    return !video ? res.sendStatus(404) : res.json(video);
});
exports.videosRouter.post('/:id', (req, res) => {
    const createVideo = {
        id: +(new Date().toISOString()),
        title: req.body.title,
    };
});
// videosRouter.put('/', (req: Request, res: Response) => {
//     res.send(videos)
// })
// videosRouter.delete('/', (req: Request, res: Response) => {
//     res.send(videos)
// })
