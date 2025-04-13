import express, { Router } from "express"
import { signIn } from "../controllers/user.js"

const router:Router=Router()

router.route("/sign-in").post(signIn)

export default router