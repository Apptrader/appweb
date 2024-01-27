import { Router } from "express";
import {allUsers, logout, login, register, profile, getReferralTree, updateUserPlan} from '../controllers/user.controllers.js'
import {authRequired} from '../middlewares/validateToken.js'

const routerUser = Router();

routerUser.post("/login", login)
routerUser.post("/logout", logout)
routerUser.post("/register", register)
routerUser.get("/users", allUsers)
routerUser.get("/profile", authRequired, profile)
routerUser.get("/referralTree", authRequired, getReferralTree)
routerUser.post("/updateUserPlan", authRequired, updateUserPlan)

export default routerUser
