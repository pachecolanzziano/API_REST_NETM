import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interface/RequestExt.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    //jwt => debe ser un string. de esta se logra `${ value }`.
    const isUser = verifyToken(`${jwt}`) as { id: string };;
    if (!isUser) {
      res.status(401), 
      res.send("NOT_JWT_VALIDO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("ERROR_CHECK_JWT / SESSION NO VALIDA");
  }
};

export { checkJwt };
