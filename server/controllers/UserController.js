import UserSchema from "../schemas/UserSchema";

export const getUsers = async (req, res) => {
    try {
        const users = await UserSchema.find()
        res.status(201).send(users)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await UserSchema.findById(req.params.id)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertUser = async (req, res) => {
    try {
        const user = new UserSchema({
            username: req.query.username,
            email: req.query.email,
            country: req.query.country,
            city: req.query.city,
            phone: req.query.phone,
            password: req.query.password
        })
        user.save()
        res.status(201).send({msg: "User created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateUserById = async (req, res) => {
    try {
        const user = await UserSchema.findByIdAndUpdate(req.params.id)
        if(user) {
            user.username = req.query.username,
            user.email = req.query.email,
            user.country = req.query.country
            user.city = req.query.city           
            user.phone = req.query.phone           
            user.password = req.query.password           
            await user.save()
            res.send({msg: "User Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deleteUserById = async (req, res) => {
    try { 
        await UserSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "User Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};