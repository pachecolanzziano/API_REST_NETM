//se ejecutara la interacción con la base de datos
import { Car } from "../interface/car.interface";
import OrderModel from "../models/item.model";

const getOrders = async () => {
    const responseItem =  await OrderModel.find({});
    return responseItem;
};

export { getOrders };