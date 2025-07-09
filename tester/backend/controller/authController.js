import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import { generateToken } from "../lib/utils.js"

export const checkAuth=(req,res)=>{
    try {
        res.status(200).json({message:"valid user sucessfully"})
    } catch (error) {
        console.log(`error in checkAuth backend ${error}`)
        res.status(500).json({message:"internal server error in backend checkAuth"})
    }
}


export const signin=async (req,res)=>{

    const {email,password}= req.body;

    try{
        if(!email||!password){
            return res.status(400).json({ message: "all fields required" });
        }

        const user = await User.findOne({email:email})

        if(!user){
            return res.status(400).json({message:"user does not exist"})
        }else{

            const isCorrectPassword =await bcrypt.compare(password,user.password);

            if(isCorrectPassword){
                generateToken(user._id,res);

                res.status(200).json({
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    profilePic: user.profilePic,
                });
            }
            else{
                return res.status(400).json({ message: "invalid credentials" });
            }
        }

    }catch(error){
        console.log(`error in authController while signin `, error.message);
        res.status(500).json({ message: "internal server error signin" });
    }
}