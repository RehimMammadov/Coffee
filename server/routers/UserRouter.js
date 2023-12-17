import express from "express";

const { getUsers, getUserById, insertUser, updateUserById, deleteUserById } = require("../controllers/UserController")
const userRouter = express.Router()

userRouter.get('', getUsers)
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', insertUser)
userRouter.put('/:id', updateUserById)
userRouter.post('', deleteUserById)

module.exports = userRouter