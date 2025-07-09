import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import {connectDB} from "./lib/DB.js";
import authRouter from "./router/authRouter.js"
import http from "http"

dotenv.config();

const app = express();
const server = http.createServer(app)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/api/auth",authRouter);


server.listen(process.env.PORT,()=>{
    console.log(`server is on ${process.env.PORT}`)
    connectDB();
})

