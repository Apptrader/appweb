import { Router } from "express";
import { getNextWeekFlush } from "../controllers/flush.cntroller.js";


const routerFlush = Router();


routerFlush.post("/nextFlush", getNextWeekFlush)

export default routerFlush
 