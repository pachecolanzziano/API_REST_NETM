import { Request, Response, Router } from "express";
import { getItems } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session.middleware";

const router = Router();

/** 
 * http://localhost:3001/order/ [GET]
 */

router.get('/',checkJwt, getItems);



export { router };