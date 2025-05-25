
import { generateToken } from "../../../../RealTimeChatApp/LIGHTNING/BACKEND/src/lib/utils.js";
import User from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const signup=async (req,res)=>{
    const {name,email,password}=req.body();

    try {
        if(!name||!email||!password){
            return res.status(400).json({message:"all fields are required"});
        }
       else if(password.length<6){
        return res.status(400).json({message:"password should contain at least 6 character"});
       }

       const user = await User.findOne({email});

       if(user) return res.status(400).json({message:"email already exist"});

       const salt=await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password,salt);
       
       const newUser = new User({
        name:name,
        email:email,
        password:hashedPassword
       })

       if(newUser){
        generateToken(newUser._id,res);
        await newUser.save();
        
       }

    } catch (error) {
        
    }
}