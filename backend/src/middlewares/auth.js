

import { verifyToken } from "../utils/jwt.js";

export const auth = (req, res, next) => {
    try{
    const authorization = req.headers.authorization;

    if(!authorization){
        return res.status(401).json({
            message: "Token required"
        });
    }

    const token = authorization.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message: "Invalid token format"
        });
    }

    const decoded = verifyToken(token);

    req.user = decoded;

    next();
    } catch(error){
        return res.status(401).json({
            message: "Invalid token"
        });
    }

};