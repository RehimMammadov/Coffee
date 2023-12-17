import ContactSchema from "../schemas/ContactSchema";

export const getContacts = async (req, res) => {
    try {
        const reservations = await ContactSchema.find()
        res.status(201).send(reservations)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getContactById = async (req, res) => {
    try {
        const contact = await ContactSchema.findById(req.params.id)
        res.status(201).send(contact)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertContact = async (req, res) => {
    try {
        const contact = new ContactSchema({
            username: req.query.username,
            email: req.query.email,
            country: req.query.country,
            city: req.query.city,
            phone: req.query.phone,
            password: req.query.password
        })
        contact.save()
        res.status(201).send({msg: "User created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateContactById = async (req, res) => {
    try {
        const contact = await ContactSchema.findByIdAndUpdate(req.params.id)
        if(contact) {
            user.username = req.query.username,
            user.email = req.query.email,
            user.country = req.query.country
            user.city = req.query.city           
            user.phone = req.query.phone           
            user.password = req.query.password           
            await Contact.save()
            res.send({msg: "User Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deleteContactById = async (req, res) => {
    try { 
        await ContactSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "User Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};