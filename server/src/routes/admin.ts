import { Router } from "express";
import mongoose from "mongoose";
import { addSpecies, deleteCollection } from "../controllers/admin.js";


const router=Router();

router.route('/drop').post(deleteCollection)
router.route("/add-species").post(addSpecies)
export default router