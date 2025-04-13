import { RequestHandler } from "express";

export const verifyAdmin:RequestHandler=(req,res,next)=>{
    //@ts-ignore
    const userInfo=req.user
    if(!userInfo.isAdmin){
        throw new Error("Your are not Admin")
    }
    next()
}