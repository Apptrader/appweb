import { Router } from "express";
import { getRankName, getNextRankById } from "../controllers/rank.controllers.js";
import {authRequired} from '../middlewares/validateToken.js'

const routerRank = Router();

routerRank.post("/getName", getRankName)
routerRank.get("/getNextRankById", authRequired, getNextRankById)


export default routerRank