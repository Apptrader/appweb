import { Router } from "express";
import { allLanguages } from "../controllers/language.controllers.js";



const routerLanguages = Router();

routerLanguages.get("/languages", allLanguages)

export default routerLanguages