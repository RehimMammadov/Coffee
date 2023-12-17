import express from "express";
import { deleteReservationById, getReservationById, getReservations, insertReservation, updateReservationById } from "../controllers/RezerveController";

const reserveRouter = express.Router()

reserveRouter.get('', getReservations)
reserveRouter.get('/:id', getReservationById)
reserveRouter.delete('/:id', insertReservation)
reserveRouter.put('/:id', updateReservationById)
reserveRouter.post('', deleteReservationById)

module.exports = reserveRouter