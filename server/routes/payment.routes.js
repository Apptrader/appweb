import { Router } from "express";
import { handlePayment, handleSubscription } from "../controllers/payment.controller.js";


const routerPayment = Router();

routerPayment.post("/checkout", handlePayment)

routerPayment.post("/checkoutSub", handleSubscription)


export default routerPayment
