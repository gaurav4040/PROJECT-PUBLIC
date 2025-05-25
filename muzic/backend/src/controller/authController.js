
import { generateToken } from '../lib/utils'
import User from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const checkAuth=async(req,res)=>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log(`error in authController in checkAuth: `,error.message);
        res.status(500).json({message:"internal server error checkAuth"});
    }
}

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

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,
        })

       }
       else{
        res.status(400).json({message:"invalid user data"});
       }

    } catch (error) {
        console.log(`error in signup controller:`,error.message);
        res.status(500).json({message:"internal server error signup"});
    }
}

export const signin=async(req,res)=>{
    const {email,password} = req.body;

    try {
        if(!email||!password){
            res.status(400).json({message:"all fields required"})
        }

        const user = await User.findOne({email:email});

        if(!user){
            res.status(400).json({message:"invalid credentials"});
        }
        else{
            const isCorrectPassword = bcrypt.compare(password,user.password);

            if(isCorrectPassword){
                generateToken(user._id,res);
                res.status(200).json({
                    _id:user._id,
                    fullName:user.fullName,
                    email:user.email,
                    profilePic:user.profilePic
                })
            }
            else{
                res.status(400).json({message:"invalid credentials"});
            }
        }
    } catch (error) {
        console.log(`error in authController while signin `,error.message);
        res.status(500).json({message:"internal server error signin"})
    }
}

export const signout = async(req,res)=>{
    try {
        res.cookie("jwt_token","",{maxAge:0});
        res.status(200).json({message:"signout successfully"});
    } catch (error) {
        console.log(`error in authController while signout : `,error.message);
        res.status(500).json({message:"internal server error signout"})
    }
}