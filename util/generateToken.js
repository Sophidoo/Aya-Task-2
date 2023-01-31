import jwt from "jsonwebtoken";

const generateToken = (token) => {
    return jwt.sign({token}, process.env.TOKEN_KEY, {expiresIn: process.env.TOKEN_EXPIRES})
}

export default generateToken;