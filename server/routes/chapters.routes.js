import { Router } from "express";
import { allChapters, createChapter, deleteChapter, updateChapter } from "../controllers/chapter.controllers.js";


const routerChapters = Router();

routerChapters.get("/chapters", allChapters)
routerChapters.post("/createChapter", createChapter)
routerChapters.delete("/chapters/:id", deleteChapter); // Ruta para eliminar un capítulo específico por ID
routerChapters.put("/chapters/:id", updateChapter)

export default routerChapters