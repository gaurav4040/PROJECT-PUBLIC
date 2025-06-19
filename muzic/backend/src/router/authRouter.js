import express from 'express';
import {signup, signin, signout } from '../controller/authController.js'

const authRouter = express.Router();


authRouter.post("/signup",signup)
authRouter.post("/signin",signin)
authRouter.post("/signout",signout)

export default authRouter;