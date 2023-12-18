import NewArticleSchema from "../schemas/NewArticleSchema";

export const getNewArticle = async (req, res) => {
    try {
        const newArticle = await NewArticleSchema.find()
        res.status(201).send(newArticle)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getNewArticleById = async (req, res) => {
    try {
        const newArticle = await NewArticleSchema.findById(req.params.id)
        res.status(201).send(newArticle)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertNewArticle = async (req, res) => {
    try {
        const newArticle = new NewArticleSchema({
            description: req.query.description,
            image: req.query.image,
        })
        newArticle.save()
        res.status(201).send({msg: "New Article created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateNewArticleById = async (req, res) => {
    try {
        const newArticle = await NewArticleSchema.findByIdAndUpdate(req.params.id)
        if(newArticle) {
            user.description = req.query.description,
            user.image = req.query.image          
            await newArticle.save()
            res.send({msg: "Article Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deleteNewArticleById = async (req, res) => {
    try { 
        await NewArticleSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "Article Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};