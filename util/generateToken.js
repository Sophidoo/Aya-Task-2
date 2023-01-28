import jwt from "jsonwebtoken";

const generateToken = (token) => {
    return jwt.sign({id}, process.env.TOKEN_KEY, {expiresIn: process.env.TOKEN_EXPIRES})
}

export default generateToken;