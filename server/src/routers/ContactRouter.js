import express from "express";
import { deleteContactById, getContactById, getContacts, insertContact, updateContactById } from "../controllers/ContactController";

const contactRouter = express.Router()

contactRouter.get('', getContacts)
contactRouter.get('/:id', getContactById)
contactRouter.delete('/', insertContact)
contactRouter.put('/:id', updateContactById)
contactRouter.post('/:id', deleteContactById)

module.exports = contactRouter