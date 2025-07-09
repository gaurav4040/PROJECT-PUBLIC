import  express  from "express";
import { protectRouter } from "../middleware/authMiddleware.js";
import {signin,checkAuth} from "../controller/authController.js"

const authRouter = express.Router();

authRouter.get("/check",protectRouter,checkAuth)
authRouter.post("/signin",signin)

export default authRouter;