import { Request, Response, Router} from "express"

export let videos = [
    {
          id: 1,
          title: "string",
          author: "string",
          canBeDownloaded: false,
          minAgeRestriction: null,
          createdAt: +(new Date()),
          publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
          availableResolutions: [
            "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160" 
        ]
    },
    {
        id: 2,
        title: "string",
        author: "string",
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: +(new Date()),
        publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
        availableResolutions: [
          "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160" 
      ]
  },
  {
    id: 3,
    title: "string",
    author: "string",
    canBeDownloaded: false,
    minAgeRestriction: null,
    createdAt: +(new Date()),
    publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
    availableResolutions: [
      "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160" 
  ]
}
]