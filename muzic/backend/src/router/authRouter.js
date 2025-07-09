import express from 'express';
import {signin, checkAuth } from '../controller/authController.js'
import { protectRouter } from '../middleware/authMiddleware.js';

const authRouter = express.Router();

authRouter.get("/check",protectRouter,checkAuth);
// authRouter.post("/signup",signup)
authRouter.post("/callback",signin)
// authRouter.post("/signout",signout)

export default authRouter;