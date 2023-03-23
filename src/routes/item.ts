import { Request, Response, Router } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem } from "../controllers/item.controller";

const router = Router();

/** 
 * http://localhost:3001/item/ [GET]
 */
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
console.log("routes item");

export { router };