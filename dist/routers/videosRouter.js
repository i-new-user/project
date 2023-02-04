"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const db_videos_1 = require("../db/db_videos");
const http_statuses_1 = require("../http_statuses");
exports.videosRouter = (0, express_1.Router)();
exports.videosRouter.get('/', (req, res) => {
    var _a;
    const foundVideos = db_videos_1.videosRepositories.searchVideos((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundVideos);
});
exports.videosRouter.get('/:id', (req, res) => {
    const video = db_videos_1.videosRepositories.searchVideosById(+req.params.id);
    !video ? res.status(http_statuses_1.HTTP_STATUSES.NOT_FOUND_404) :
        res.status(http_statuses_1.HTTP_STATUSES.OK_200).json(video);
});
exports.videosRouter.post('/', (req, res) => {
    const error = { "errorsMessages": [{
                "message": "If video for passed id doesn't exist",
                "field": "If video for passed id doesn't exist"
            }]
    };
    const body = db_videos_1.videosRepositories.searchVideos(req.body);
    const title = db_videos_1.videosRepositories.searchVideos(req.body.title);
    const author = db_videos_1.videosRepositories.searchVideos(req.body.author);
    const availableResolutions = db_videos_1.videosRepositories.searchVideos(req.body.availableResolutions);
    !title || title.length > 40 || typeof title !== 'string' ||
        !author || author.length > 20 || typeof author !== 'string' ||
        availableResolutions.length < 1
        ? res.status(http_statuses_1.HTTP_STATUSES.NOT_FOUND_404).json(error)
        : res.sendStatus(http_statuses_1.HTTP_STATUSES.CREATED_201).json(body);
});
exports.videosRouter.put('/videos/:id', (req, res) => {
    const error = { "errorsMessages": [{
                "message": "If video for passed id doesn't exist",
                "field": "If video for passed id doesn't exist"
            }]
    };
    const title = db_videos_1.videosRepositories.searchVideos(req.body.title);
    const author = db_videos_1.videosRepositories.searchVideos(req.body.author);
    const availableResolutions = db_videos_1.videosRepositories.searchVideos(req.body.availableResolutions);
    const canBeDownloaded = db_videos_1.videosRepositories.searchVideos(req.body.canBeDownloaded);
    const minAgeRestriction = db_videos_1.videosRepositories.searchVideos(req.body.minAgeRestriction);
    const publicationDate = db_videos_1.videosRepositories.searchVideos(req.body.publicationDate);
    const isUpdated = db_videos_1.videosRepositories.updateVideo(+req.params.id, req.body.title);
    if (isUpdated) {
        const video = db_videos_1.videosRepositories.searchVideosById(+req.params.id);
        res.send(video);
    }
    else {
        res.status(http_statuses_1.HTTP_STATUSES.NOT_FOUND_404).json(error);
    }
});
exports.videosRouter.delete('/:id', (req, res) => {
    let isDeleded = db_videos_1.videosRepositories.deleteVideoById(+req.params.id);
    isDeleded ? res.status(http_statuses_1.HTTP_STATUSES.NO_CONTENT_204) : res.status(http_statuses_1.HTTP_STATUSES.NOT_FOUND_404);
});
