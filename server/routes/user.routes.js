import { Router } from "express";
import {allUsers, login, register} from '../controllers/user.controllers.js'

const routerUser = Router();

routerUser.get("/login", login)
routerUser.post("/register", register)
routerUser.get("/users", allUsers)

export default routerUser
