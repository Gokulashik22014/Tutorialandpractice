import { NextFunction, RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
export interface CustomRequest extends RequestHandler {
  user?: string | JwtPayload;
}
export const auth: CustomRequest = (req, res, next) => {
  let token: string | undefined = req.headers.authorization;
  if (!token) {
    throw new Error("something went wrong");
  }
  console.log(token)
  token = token.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
  //@ts-ignore
  req.user=decoded
  next();
};
