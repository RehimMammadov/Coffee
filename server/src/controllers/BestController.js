import BestSchema from "../schemas/BestSchema";

export const getBest = async (req, res) => {
    try {
        const best = await BestSchema.find()
        res.status(201).send(best)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getBestById = async (req, res) => {
    try {
        const best = await BestSchema.findById(req.params.id)
        res.status(201).send(best)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertBest = async (req, res) => {
    try {
        const best = new BestSchema({
            name: req.query.name,
            description: req.query.description,
            image: req.query.image,
        })
        best.save()
        res.status(201).send({msg: "Best created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateBestById = async (req, res) => {
    try {
        const best = await BestSchema.findByIdAndUpdate(req.params.id)
        if(best) {
            user.name = req.query.name,
            user.description = req.query.description,
            user.image = req.query.image          
            await best.save()
            res.send({msg: "Best Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deleteBestById = async (req, res) => {
    try { 
        await BestSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "Best Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};