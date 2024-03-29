import { Router } from "express";
import {deletePaidPlan, createPaidPlan, updatePaidPlan, getPaidPlan, allPaidPlans} from '../controllers/paidplans.controllers.js'

const routerPaidPlans = Router();

routerPaidPlans.delete("/deletePaidPlan/:id", deletePaidPlan)
routerPaidPlans.post("/createPaidPlan", createPaidPlan)
routerPaidPlans.get("/getPaidPlan/:id", getPaidPlan)
routerPaidPlans.put("/updatePaidPlan/:id", updatePaidPlan)
routerPaidPlans.get("/paidplans", allPaidPlans)

export default routerPaidPlans
 