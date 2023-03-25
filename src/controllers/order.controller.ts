import { Request, Response } from "express";
import { getOrders } from "../services/order.service";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interface/RequestExt.interface";


const getItems = (req: RequestExt, res: Response) => {
  try {
    //ejemplo de una respuesta con JWT con proteccion de rutas
    res.send({
      data:'😊BIENVENIDO, ESTO SOLO LO VE LAS PERSONAS CON SESSION ACTIVA /JWT ✅ VALIDO',
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

export { getItems};