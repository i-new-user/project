

export type APIErrorResultType = {
    errorsMeassages: Array<FieldErrorType>
}


export type FieldErrorType = {
    message: string
    field: string
}

export type CreateVideoInputModelType = {
    title: string
    author: string
    availableResolution: Array<ResolutionsType>
}

export type ResolutionsType = Array<string>
    // P144: "P144",
    // P240: "P240",
    // P360: "P360",
    // P480: "P480",
    // P720: "P720",
    // P1080: "P1080",
    // P1440: "P1440",
    // P2160: "P2160",


export type UpdateVideoInputModelType = {
    title: string
    author: string
    availableResolution: Array<ResolutionsType>
    conBeDownloaded: boolean
    minAgeRestriction: number
    publicationsDate: string
}



export type VideosType = {
    id: number
    title: string
    author: string
    conBeDownloaded: boolean
    createdAt: string
    publicationDate: string
    availableResolution: Array<ResolutionsType>
}

