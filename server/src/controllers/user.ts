import { RequestHandler } from "express";
import userInfo from "../models/userInfoModel.js";
import users from "../models/userModel.js";
export const updateUserInfo:RequestHandler=async(req,res)=>{
    const {firstName,lastName,location,role}:{
        firstName:string,lastName:string,location:string,role:'customer'|'fisherman'
    }=req.body
    //@ts-ignore
    const userId:string=req.user._id
    //first lets see if they exist if so update
    const user=await users.findById(userId)
    if(!user){
        const newUser=await userInfo.create({firstName,lastName,location,role,userId})
        if(!newUser){
            throw new Error("Unable to create user")
        }
        res.json({success:true,user:newUser})
    }else{
        const updatedUser=await userInfo.findByIdAndUpdate(userId,{firstName,lastName,location,role,userId})
        res.json({success:true,user:updatedUser})
    }
}