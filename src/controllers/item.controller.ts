import { Request, Response } from "express";
import { getCar, insertCar, getCars, updateCar, deleteCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({params}: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NOT FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM",e)
  }
};

const getItems = async(req: Request, res: Response) => {
  try {
    const responseItem = await getCars()
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  const responseItem = await updateCar(req.params.id, req.body );
  res.send(responseItem);
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send( responseItem );
  }catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e)
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "💥ERROR_DELETE_ITEM", e);
  }
};

console.log('aqui estoy controller');

export { getItem, getItems, updateItem, postItem, deleteItem };
