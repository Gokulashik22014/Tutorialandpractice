import { Router } from "express";
import mongoose from "mongoose";
import { deleteCollection } from "../controllers/admin.js";


const router=Router();

router.route('/drop').post(deleteCollection)

export default router