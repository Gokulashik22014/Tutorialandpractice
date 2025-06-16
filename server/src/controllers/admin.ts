import { RequestHandler } from "express";
import mongoose from "mongoose";
import multer from "multer";
import images from "../models/imageModel.js";
import species from "../models/speciesModel.js";

export const deleteCollection:RequestHandler=async(req,res)=>{
    const {targetCollectionName}=req.body
    const result=await mongoose.connection.collection(targetCollectionName).drop()
    if(!result){
        throw new Error("Collection not found")
    }
    res.json({success:true,message:"successfully deleted the collection",result})
}
export const addSpecies:RequestHandler=async(req,res)=>{
    const {name,cost,locations}=req.body
    //adding species
    const fish=await species.create(name,cost,locations)
    console.log(fish)
    //uploading the image
    // addImage(req.file?.buffer,req.file?.mimetype,fish._id)
}
export const addImage=async(data:any,contentType:any,id:any)=>{
    const fishImage=new images({
        image:{
            data:data,
            contentType:contentType,
        },
        speciesId:id
    })
    await fishImage.save();
}