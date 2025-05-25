import express from 'express';
import { connectDB } from './lib/DB';

const app = express();
const PORT= process.env.PORT;

app.use("api/auth",authRouter);
app.use("api/songs",songRouter);
app.use("api/",(req,res)=>{
    res.status(404).json({message:"page not found"});
})

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    connectDB()
});

