import express from "express";
import { deletePopularById, getPopular, getPopularById, insertPopular, updatePopularById } from "../controllers/PopularController";

const popularRouter = express.Router()

popularRouter.get('', getPopular)
popularRouter.get('/:id', getPopularById)
popularRouter.delete('/', insertPopular)
popularRouter.put('/:id', updatePopularById)
popularRouter.post('/:id', deletePopularById)

module.exports = popularRouter