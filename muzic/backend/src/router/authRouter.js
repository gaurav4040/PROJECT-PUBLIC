import express from 'express';
import signup from '../controller/authController'

const authRouter = express.Router();


authRouter.post("/signup",signup)


export default authRouter;