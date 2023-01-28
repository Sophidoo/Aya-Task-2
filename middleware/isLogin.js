import { obtainToken } from "../util/obtainToken"
import { verifytoken } from "../util/verifyToken";



export const isLogin = (req, res, next) => {
    const token = obtainToken(req);
    const userDecoded = verifytoken(token);

    req.userAuth = userDecoded.id

    if(!userDecoded){
        return res.json({
            status: "Failed",
            message: "Please Login, Token expired or Invalid"
        })
    }else{
        next();
    }
}