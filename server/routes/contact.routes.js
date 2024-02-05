import { Router } from "express";
import { sendEmail } from "../controllers/contact.controllers.js";
const routerContact = Router();

routerContact.post("/contact", sendEmail)

export default routerContact
 