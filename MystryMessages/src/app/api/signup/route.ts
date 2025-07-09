import dbConnect from "@/lib/dbConnect";
import userModel from "@/model/User";
import bcrypt from "bcrypt"

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function POST(req:Request):Promise<ApiResponse>{

    await dbConnect()

    try {
        
        const {username,email,password} = await req.json()

        const existingUserVerifiedByUsername = await userModel.findOne({
            username,
            isVerified:true
        })

        if(existingUserVerifiedByUsername){
            return {
                success:false,
                message:"user already exist",
                status:400
            }
        }

        const existingUserByEmail = await userModel.findOne({
            email
        })

        const verifyCode = Math.floor(100000+Math.random()*900000).toString();

        if(existingUserByEmail){
            if(existingUserByEmail.isVerified){
                return {
                    success:false,
                    message:"user already exist with this email",
                    status:400
                }
            }else{
                const hashedPassword = await bcrypt.hash(password,10)

                existingUserByEmail.password = hashedPassword;
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry= new Date(Date.now()+3600000)

                await existingUserByEmail.save()
            }
        }
        else{
            const hashedPassword = await bcrypt.hash(password,10)

            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours()+1);

            const newUser = new userModel({
                username:username,
                email:email,
                password:hashedPassword,
                verifyCode:verifyCode,
                verifyCodeExpiry:expiryDate,
                isVerified:false,
                isAcceptingMessage:true,
                messages:[]
            })

            await newUser.save()
            return {
                success:true,
                message:"successfully registed new user",
                status:500
            }
        }

        const emailResponse = await sendVerificationEmail(
            email,
            username,
            verifyCode
        )
        if(!emailResponse.success){
            return {
                success:false,
                message:emailResponse.message,
                status:500
            }
        }else{
             return {
                success:true,
                message:"user register successfully , please verify your email",
                status:201
            }
        }
    } catch (error) {
        console.log(`Error registering new user  ${error}`)

        return {
            success:false,
            message:"failed in registering new user",
            status:500
        }
    }
}