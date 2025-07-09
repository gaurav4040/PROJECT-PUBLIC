import express from "express";
import  {connectDB}  from "./lib/DB.js";
import { app, server } from "./lib/socket.js";
import authRouter from "./router/authRouter.js";
import songRouter from "./router/songRouter.js";
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"https://9efd-103-171-46-19.ngrok-free.app",
    credentials:true
}))

app.use("/", authRouter);
app.use("/api/songs", songRouter);

app.use("/api", (req, res) => {
  res.status(404).json({ message: "page not found" });
});
  
server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});
