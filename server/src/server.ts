import express, { Request, Response } from "express";
import { handleAllError } from "./middlewares/errorHandler.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

const PORT: number = parseInt(process.env.PORT as string);

app.use("/api", userRouter);
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "success" });
});
app.use(handleAllError);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() =>
    app.listen(PORT, () => console.log("Server listening at PORT: " + PORT))
  )
  .catch((error) => console.log(error));
