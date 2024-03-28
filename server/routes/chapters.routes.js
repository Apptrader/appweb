import { Router } from "express";
import { allChapters } from "../controllers/chapter.controllers.js";


const routerChapters = Router();

routerChapters.get("/chapters", allChapters)

export default routerChapters