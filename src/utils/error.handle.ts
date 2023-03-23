import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any)=>{
    res.status(500);
    res.send({error});
    console.log({errorRaw});
};

export { handleHttp };