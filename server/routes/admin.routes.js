import { Router } from "express";
import {allAdmins, login, register} from '../controllers/admin.controllers.js'

const routerAdmin = Router();

routerAdmin.post("/login", login)
routerAdmin.post("/register", register)
routerAdmin.get("/admins", allAdmins)

export default routerAdmin
 