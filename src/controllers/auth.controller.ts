import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

const registerCtrl = async ({ body }: Request, res: Response) => {
    const responseUser= await registerNewUser(body);
    res.send(responseUser);
}

const loginCtrl = async ({ body }: Request, res: Response) => {
    const {email, password} = body;
    const responseLogin = await loginUser({email, password});
    if (responseLogin === "PASSWORD_INCORRECT"){
        res.status(403);
        res.send(responseLogin);
    }else{ res.send(responseLogin);}
}

export {registerCtrl, loginCtrl};