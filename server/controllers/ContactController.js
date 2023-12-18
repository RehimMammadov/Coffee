import ContactSchema from "../schemas/ContactSchema";

export const getContacts = async (req, res) => {
    try {
        const contacts = await ContactSchema.find()
        res.status(201).send(contacts)
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
            name: req.query.name,
            email: req.query.email,
            subject: req.query.subject,
            message: req.query.message,
        })
        contact.save()
        res.status(201).send({msg: "Contact created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateContactById = async (req, res) => {
    try {
        const contact = await ContactSchema.findByIdAndUpdate(req.params.id)
        if(contact) {
            user.name = req.query.name,
            user.email = req.query.email,          
            user.subject = req.query.subject           
            user.message = req.query.message           
            await contact.save()
            res.send({msg: "Contact Updated"})
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
            res.status(200).send({msg: "Contact Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};