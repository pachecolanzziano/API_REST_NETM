import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import multerMiddleware from "../middleware/file.middleware"
import { checkJwt } from "../middleware/session.middleware";

const router = Router();

router.post("/",checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };