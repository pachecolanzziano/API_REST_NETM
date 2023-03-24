import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.controller"
const router = Router();

/** http://localhost:3001/auth/registrer [Post] */
router.post('/register',registerCtrl );
router.post('/login', loginCtrl );

export { router };