// import { Request, Response, Router} from "express"
// import { VideosType,  ResolutionsType} from "../types/video_types"

// export let videos = [
//    {
//           id: 1,
//           title: "111111111111",
//           author: "it-incubator",
//           canBeDownloaded: false,
//           minAgeRestriction: null,
//           createdAt: +(new Date().toISOString()),
//           publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
//           availableResolutions: ["P144"]
//     },
//     {
//         id: 2,
//         title: "2222222222",
//         author: "it-incubator",
//         canBeDownloaded: false,
//         minAgeRestriction: null,
//         createdAt: +(new Date()),
//         publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
//         availableResolutions: ["P144",]
//   },
//   {
//     id: 3,
//     title: "333333333",
//     author: "it-incubator",
//     canBeDownloaded: false,
//     minAgeRestriction: null,
//     createdAt: +(new Date()),
//     publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
//     availableResolutions: [
//       "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160" 
//   ]
// }
//  ]

// export const videosRepositories = {

//   searchVideos(elem: string | null | undefined){
//     if(elem){
//       let searchVideo = videos.filter(v => v.title.indexOf(elem) > -1)
//       return searchVideo
//     } else {
//       return videos
//     }
//   },

//   searchVideosById(id: number){
//     let video = videos.find( v => v.id === id)
//     return video
//   },

//   createVideos(title: string, author:string,  availableResolution: Array<ResolutionsType>){
  
//     const newVideo = {
//       id: +(new Date().toISOString),
//       title: title,
//       author: author,
//       canBeDownloaded: false,
//       minAgeRestriction: null,
//       createdAt: +(new Date()),
//       publicationDate: +( new Date().setDate(new Date().getDate() + 1) ),
//       availableResolutions: ["P144" ]
//     }
//    videos.push(newVideo)
//    return newVideo
//   },  

//   updateVideo(id: number, title: string){
//     const video = videos.find(v => v.id === id)
//     if(video ){
//       video.title = title
//       return true;
//     }else{
//       return false
//     }
//   },

//   deleteVideoById(id: number){
//     for(let i = 0; i < videos.length; i++){
//       if(videos[i].id = id){
//         videos.splice(i, 1)
//         return true
//       }
//     }
//     return false
//   }
// }