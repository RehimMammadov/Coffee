import express from "express";
import { deleteMenuById, getMenu, getMenuById, insertMenu, updateMenuById } from "../controllers/MenuController";

const menuRouter = express.Router()

menuRouter.get('', getMenu)
menuRouter.get('/:id', getMenuById)
menuRouter.delete('/', insertMenu)
menuRouter.put('/:id', updateMenuById)
menuRouter.post('/:id', deleteMenuById)

module.exports = menuRouter