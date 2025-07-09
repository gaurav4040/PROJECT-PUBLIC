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

export const signin= async (req, res) => {
  
const code = req.body.code;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.REDIRECT_URI,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET).toString("base64"),
        },
      }
    );

    res.json({
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresIn: response.data.expires_in,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

