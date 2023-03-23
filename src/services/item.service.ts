//se ejecutara la interacción con la base de datos
import { Car } from "../interface/car.interface";
import ItemModel from "../models/item.model";

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

const getCars = async () => {
    const responseItem =  ItemModel.find({});
    return responseItem;
};

const getCar = async (id: string) => {
    const responseItem =  ItemModel.findOne({_id: id});
    return responseItem;
};

//build  update, delete in service and controller✅
const updateCar =  (id: string, data:Car) => {
    const responseUpdate = ItemModel.findOneAndUpdate({_id: id} , data, {new: true});
    return (responseUpdate);
};

const deleteCar =  (id: string) => {
    const responseItem =  ItemModel.deleteOne({_id: id});
    return responseItem;
};

export { insertCar, getCar, getCars, updateCar, deleteCar };