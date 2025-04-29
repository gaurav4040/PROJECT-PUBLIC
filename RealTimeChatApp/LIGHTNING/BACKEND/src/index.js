import express from 'express';
import authRouter from './routes/authRouter.js';
import messageRouter from './routes/messageRouter.js'
// import errorRouter from './routes/errorRouter.js'
import dotenv from 'dotenv';
import { connectDB } from './lib/DB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app,server } from './lib/socket.js';

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/api/auth",authRouter);
app.use("/api/messages",messageRouter);

app.use("/api", (req, res) => {
    console.log("error is coming")
    res.status(404).json({ message: "Page not found" });
  });

server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    connectDB()
})