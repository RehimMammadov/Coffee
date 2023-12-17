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
            username: req.query.username,
            email: req.query.email,
            country: req.query.country,
            city: req.query.city,
            phone: req.query.phone,
            password: req.query.password
        })
        reservation.save()
        res.status(201).send({msg: "User created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateReservationById = async (req, res) => {
    try {
        const reservation = await RezerveSchema.findByIdAndUpdate(req.params.id)
        if(reservation) {
            user.username = req.query.username,
            user.email = req.query.email,
            user.country = req.query.country
            user.city = req.query.city           
            user.phone = req.query.phone           
            user.password = req.query.password           
            await reservation.save()
            res.send({msg: "User Updated"})
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
            res.status(200).send({msg: "User Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};