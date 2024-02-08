import { Router } from "express";
import { getRankName, getNextRankById, getNextRankByIdNode } from "../controllers/rank.controllers.js";
import {authRequired} from '../middlewares/validateToken.js'

const routerRank = Router();

routerRank.post("/getName", getRankName)
routerRank.get("/getNextRankById", authRequired, getNextRankById)
routerRank.post("/getNextRankByIdNode", getNextRankByIdNode)


export default routerRank