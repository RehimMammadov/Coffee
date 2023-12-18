import express from "express";
import { deleteBestById, getBest, getBestById, insertBest, updateBestById } from "../controllers/BestController";

const bestRouter = express.Router()

bestRouter.get('', getBest)
bestRouter.get('/:id', getBestById)
bestRouter.delete('/', insertBest)
bestRouter.put('/:id', updateBestById)
bestRouter.post('/:id', deleteBestById)

module.exports = bestRouter