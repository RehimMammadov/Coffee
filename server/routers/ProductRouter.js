import express from "express";
import { deleteProductById, getProductById, getProducts, insertProduct, updateProductById } from "../controllers/ProductController";

const productRouter = express.Router()

productRouter.get('', getProducts)
productRouter.get('/:id', getProductById)
productRouter.delete('/', insertProduct)
productRouter.put('/:id', updateProductById)
productRouter.post('/:id', deleteProductById)

module.exports = productRouter