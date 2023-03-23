import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const headers = req.headers["user-agent"];
    console.log(headers);
    
    next();
    
};


export {logMiddleware};