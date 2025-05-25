import express from 'express'
import {server} from 'socket.io'
import http from 'http'
import cors from 'cors'

const app = express();
const server = http.createServer(app);
app.use(cors);

const io = new server(server,{
    cors:{
        origin:["http://localhost:5173"]
    },
});

io.on("connection",(socket)=>{
    console.log(`socket connection:${socket.id}`)
})

export {app,io,server};