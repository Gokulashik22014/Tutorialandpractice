import { RequestHandler } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import users from "../models/userModel.js";
interface userInfo{
    username?:string;
    email:string;
    password:string;
    admin:boolean;
}
const saltRounds:number = 8

export const signIn:RequestHandler=async(req,res)=>{
    const user:userInfo|null=req.body
    if(user==null){
        throw new Error("Something went wrong")
    }
    if(user.username==undefined ||user.email==undefined || user.password==undefined){
        throw new Error("Give all the information")
    }
    //hashing the password
    const encryptedPassword=await bcrypt.hash(user.password,saltRounds)
    console.log(encryptedPassword)
    const newUser=await users.create({username:user.username,email:user.email,password:encryptedPassword,admin:user.admin})
    if(newUser){
        const token=jwt.sign({_id:newUser._id,isAdmin:newUser.admin},process.env.SECRET_KEY as string,{expiresIn:'1 day'})
        res.json({success:true,message:"successfull created user",data:{token:token}})
    }
}

export const login:RequestHandler=async(req,res)=>{
    const user:userInfo | null=req.body
    if(user==null){
        throw new Error("Something went wrong")
    }
    if(user.email==undefined || user.password==undefined){
        throw new Error("Give all the information")
    }
    const currUser=await users.findOne({email:user.email})
    if(currUser==undefined){
        throw new Error("Sigin Up first")
    }
    const token=jwt.sign({_id:currUser._id,isAdmin:currUser.admin},process.env.SECRET_KEY as string,{expiresIn:'1 day'})
    res.json({success:true,message:"successfull created user",data:{token:token}})
}