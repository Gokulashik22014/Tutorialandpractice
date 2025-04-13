import { RequestHandler } from "express";

interface userInfo{
    username?:string;
    email:string;
    password:string;
}
export const signIn:RequestHandler=(req,res)=>{
    const user:userInfo|null=req.body
    throw new Error("Yes its me the problem")
    res.json({status:true,message:"success"})
}