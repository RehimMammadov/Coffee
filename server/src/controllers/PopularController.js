import PopularSchema from "../schemas/PopularSchema";

export const getPopular = async (req, res) => {
    try {
        const popular = await PopularSchema.find()
        res.status(201).send(popular)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getPopularById = async (req, res) => {
    try {
        const popular = await PopularSchema.findById(req.params.id)
        res.status(201).send(popular)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertPopular = async (req, res) => {
    try {
        const popular = new PopularSchema({
            name: req.query.name,
            price: req.query.price,
            image: req.query.image,
        })
        popular.save()
        res.status(201).send({msg: "Popular created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updatePopularById = async (req, res) => {
    try {
        const popular = await PopularSchema.findByIdAndUpdate(req.params.id)
        if(popular) {
            user.name = req.query.name,
            user.price = req.query.price,
            user.image = req.query.image          
            await popular.save()
            res.send({msg: "Popular Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deletePopularById = async (req, res) => {
    try { 
        await PopularSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "Popular Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};