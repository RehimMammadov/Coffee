import RezerveSchema from "../schemas/RezerveSchema";

export const getReservations = async (req, res) => {
    try {
        const reservations = await RezerveSchema.find()
        res.status(201).send(reservations)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getReservationById = async (req, res) => {
    try {
        const reservation = await RezerveSchema.findById(req.params.id)
        res.status(201).send(reservation)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertReservation = async (req, res) => {
    try {
        const reservation = new RezerveSchema({
            name: req.query.name,
            email: req.query.email,
            seates: req.query.seates,
            phone: req.query.phone,
            date: req.query.date,
            time: req.query.time
        })
        reservation.save()
        res.status(201).send({msg: "Reservation created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateReservationById = async (req, res) => {
    try {
        const reservation = await RezerveSchema.findByIdAndUpdate(req.params.id)
        if(reservation) {
            user.name = req.query.name,
            user.email = req.query.email,
            user.seates = req.query.seates
            user.date = req.query.date           
            user.phone = req.query.phone           
            user.time = req.query.time           
            await reservation.save()
            res.send({msg: "Reservation Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deleteReservationById = async (req, res) => {
    try { 
        await RezerveSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "Reservation Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};