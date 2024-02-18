import { Router } from "express";
import {allVideos} from  '../controllers/video.controllers.js'
import { createVideo } from '../controllers/video.controllers.js';
import { createChapter } from "../controllers/video.controllers.js";

const routerVideos = Router();


routerVideos.get("/videos", allVideos)
routerVideos.post("/createVideo", createVideo)
routerVideos.post('/createChapter', createChapter);

export default routerVideos
 