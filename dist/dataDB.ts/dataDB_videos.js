"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videos = void 0;
exports.videos = [
    {
        id: 1,
        title: "111111111111",
        author: "string",
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: +(new Date().toISOString()),
        publicationDate: +(new Date().setDate(new Date().getDate() + 1)),
        availableResolutions: [
            "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"
        ]
    },
    {
        id: 2,
        title: "2222222222",
        author: "string",
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: +(new Date()),
        publicationDate: +(new Date().setDate(new Date().getDate() + 1)),
        availableResolutions: [
            "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"
        ]
    },
    {
        id: 3,
        title: "333333333",
        author: "string",
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: +(new Date()),
        publicationDate: +(new Date().setDate(new Date().getDate() + 1)),
        availableResolutions: [
            "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"
        ]
    }
];
