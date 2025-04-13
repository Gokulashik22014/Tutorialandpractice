import { RequestHandler } from "express";
import mongoose from "mongoose";

export const deleteCollection:RequestHandler=async(req,res)=>{
    const {targetCollectionName}=req.body
    const result=await mongoose.connection.collection(targetCollectionName).drop()
    if(!result){
        throw new Error("Collection not found")
    }
    res.json({success:true,message:"successfully deleted the collection",result})
}