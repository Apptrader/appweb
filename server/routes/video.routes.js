import { Router } from "express";
import {allVideos} from  '../controllers/video.controllers.js'
import { createVideo, uploadVideo } from '../controllers/video.controllers.js';
import { createChapter } from "../controllers/video.controllers.js";
import { getAllChapters } from "../controllers/video.controllers.js";
import {deleteVideos} from "../controllers/video.controllers.js"
import { editVideo } from "../controllers/video.controllers.js"

const routerVideos = Router();


routerVideos.get("/videos", allVideos)
/* routerVideos.post("/createVideo", uploadVideo, createVideo) */
routerVideos.post("/createVideo", createVideo)
routerVideos.post('/createChapter', createChapter);
routerVideos.get('/chapterVideos', getAllChapters);
routerVideos.post('/deleteVideo', deleteVideos)
routerVideos.post('/editVideo', editVideo)
export default routerVideos
 