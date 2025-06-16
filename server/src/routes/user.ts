import { Router } from "express";
import { updateUserInfo } from "../controllers/user.js";

const router:Router=Router()
router.route("/update").post(updateUserInfo)
export default router