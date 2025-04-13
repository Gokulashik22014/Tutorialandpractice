import { ErrorRequestHandler, NextFunction } from "express";

export const handleAllError:ErrorRequestHandler=(err,res,req,next)=>{
    try {
        console.log(err)
        next()
    } catch (error) {
        console.log("am i running"+error)
    }
}