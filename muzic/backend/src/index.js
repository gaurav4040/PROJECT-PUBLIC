import express from 'express';
import { connectDB } from './lib/DB';
import {app,server} from './lib/socket'
import authRouter from './router/authRouter'
import songRouter from './router/songRouter'
import dotenv from 'dotenv'

dotenv.config();
const PORT= process.env.PORT;

app.use(express.json());

app.use("api/auth",authRouter);
app.use("api/songs",songRouter);


app.use("api/",(req,res)=>{
    res.status(404).json({message:"page not found"});
})


server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    connectDB()
});

