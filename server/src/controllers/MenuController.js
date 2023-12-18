import MenuSchema from "../schemas/MenuSchema";

export const getMenu = async (req, res) => {
    try {
        const menu = await MenuSchema.find()
        res.status(201).send(menu)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getMenuById = async (req, res) => {
    try {
        const menu = await MenuSchema.findById(req.params.id)
        res.status(201).send(menu)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertMenu = async (req, res) => {
    try {
        const menu = new MenuSchema({
            name: req.query.name,
            price: req.query.price,
            image: req.query.image,
            category: req.query.category
        })
        menu.save()
        res.status(201).send({msg: "Menu created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateMenuById = async (req, res) => {
    try {
        const menu = await MenuSchema.findByIdAndUpdate(req.params.id)
        if(menu) {
            user.name = req.query.name,
            user.price = req.query.price,
            user.image = req.query.image,
            user.category = req.query.category          
            await menu.save()
            res.send({msg: "Menu Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deleteMenuById = async (req, res) => {
    try { 
        await MenuSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "Menu Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};