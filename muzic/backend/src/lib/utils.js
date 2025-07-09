import jwt from 'jsonwebtoken'


export const generateToken=(userId,res)=>{

    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("jwt_token", token, {
        httpOnly: true,
        secure: true,         // true only for HTTPS
        sameSite: "lax",       // 'none' if frontend/backend on different origins
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return token;
};