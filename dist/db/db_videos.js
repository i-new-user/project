"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRepositories = exports.videos = void 0;
exports.videos = [
    {
        id: 1,
        title: "111111111111",
        author: "it-incubator",
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: +(new Date().toISOString()),
        publicationDate: +(new Date().setDate(new Date().getDate() + 1)),
        availableResolutions: ["P144"]
    },
    {
        id: 2,
        title: "2222222222",
        author: "it-incubator",
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: +(new Date()),
        publicationDate: +(new Date().setDate(new Date().getDate() + 1)),
        availableResolutions: ["P144",]
    },
    {
        id: 3,
        title: "333333333",
        author: "it-incubator",
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: +(new Date()),
        publicationDate: +(new Date().setDate(new Date().getDate() + 1)),
        availableResolutions: [
            "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"
        ]
    }
];
exports.videosRepositories = {
    searchVideos(elem) {
        if (elem) {
            let searchVideo = exports.videos.filter(v => v.title.indexOf(elem) > -1);
            return searchVideo;
        }
        else {
            return exports.videos;
        }
    },
    searchVideosById(id) {
        let video = exports.videos.find(v => v.id === id);
        return video;
    },
    createVideos(title, author, availableResolution) {
        const newVideo = {
            id: +(new Date().toISOString),
            title: title,
            author: author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: +(new Date()),
            publicationDate: +(new Date().setDate(new Date().getDate() + 1)),
            availableResolutions: ["P144"]
        };
        exports.videos.push(newVideo);
        return newVideo;
    },
    updateVideo(id, title) {
        const video = exports.videos.find(v => v.id === id);
        if (video) {
            video.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteVideoById(id) {
        for (let i = 0; i < exports.videos.length; i++) {
            if (exports.videos[i].id = id) {
                exports.videos.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
