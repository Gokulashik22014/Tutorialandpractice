import express, { Router } from "express"
import { login, signIn } from "../controllers/auth.js"

const router:Router=Router()

router.route("/sign-in").post(signIn)
router.route("/login").post(login)
export default router