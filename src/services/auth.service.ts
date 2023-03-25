import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcryptjs.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User ) => {
    const checkIs = await UserModel.findOne({email});
    if (checkIs) return "ud ya tiene una cuenta con nosotros."
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({email, password:passHash, name});
    return registerNewUser;
};

const loginUser = async ({email, password}: Auth ) => {
    const userCheckIs = await UserModel.findOne({email});
    if (!userCheckIs) return "NOT_FOUND_USER";

    const passwordHash = userCheckIs.password;
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECT";
    const token = generateToken(userCheckIs.email);
    const data = {
        token,
        user : userCheckIs,
    };
    return data;
};

export {registerNewUser, loginUser};