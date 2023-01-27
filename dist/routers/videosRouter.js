"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const dataDB_videos_1 = require("../dataDB.ts/dataDB_videos");
exports.videosRouter = (0, express_1.Router)();
exports.videosRouter.get('/', (req, res) => {
    res.send(dataDB_videos_1.videos);
});
