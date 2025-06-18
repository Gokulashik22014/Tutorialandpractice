import express, { Request, Response } from "express";
import { handleAllError } from "./middlewares/errorHandler.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js"
import userRouter from "./routes/user.js"
import cors from "cors";
import mongoose from "mongoose";
import { auth } from "./middlewares/auth.js";
import { verifyAdmin } from "./middlewares/verifyAdmin.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

const PORT: number = parseInt(process.env.PORT as string);

app.use("/api/auth", authRouter);
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "success" });
});
app.use("/api/user",auth,userRouter);

app.get("/check",auth,(req:Request,res:Response)=>{
  // console.log(req.user)
  //@ts-ignore
  res.json({staus:true,message:"success",data:req.user})
})
app.use("/api/admin",auth,verifyAdmin,adminRouter)
app.use(handleAllError);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() =>
    app.listen(PORT, () => console.log("Server listening at PORT: " + PORT))
  )
  .catch((error) => console.log(error));
