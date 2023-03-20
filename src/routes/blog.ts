import { Request, Response, Router } from "express";

const router = Router();

/** 
 * http://localhost:3001/items/ [GET]
 */

router.get('/', (req:Request, res:Response) => {
    res.send({data:"aqui van los modelos"})
});



export { router };