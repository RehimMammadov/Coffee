import express from "express";
import { deleteNewArticleById, getNewArticle, getNewArticleById, insertNewArticle, updateNewArticleById } from "../controllers/NewArticleController";

const newArticleRouter = express.Router()

newArticleRouter.get('', getNewArticle)
newArticleRouter.get('/:id', getNewArticleById)
newArticleRouter.delete('/', insertNewArticle)
newArticleRouter.put('/:id', updateNewArticleById)
newArticleRouter.post('/:id', deleteNewArticleById)

module.exports = newArticleRouter