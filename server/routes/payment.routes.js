import { Router } from "express";
import { handlePayment } from "../controllers/payment.controller.js";


const routerPayment = Router();

routerPayment.post("/checkout", handlePayment)


export default routerPayment
