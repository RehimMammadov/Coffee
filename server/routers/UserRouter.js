import express from "express";

const { getUsers, getUserById, insertUser, updateUserById, deleteUserById } = require("../controllers/UserController")
const userRouter = express.Router()

userRouter.get('', getUsers)
userRouter.get('/:id', getUserById)
userRouter.delete('/', insertUser)
userRouter.put('/:id', updateUserById)
userRouter.post('/:id', deleteUserById)

module.exports = userRouter