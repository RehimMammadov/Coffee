import express from "express";
import { deleteContactById, getContactById, getContacts, insertContact, updateContactById } from "../controllers/ContactController";

const contactRouter = express.Router()

contactRouter.get('', getContacts)
contactRouter.get('/:id', getContactById)
contactRouter.delete('/:id', insertContact)
contactRouter.put('/:id', updateContactById)
contactRouter.post('', deleteContactById)

module.exports = contactRouter