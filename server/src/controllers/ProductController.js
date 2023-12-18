import ProductSchema from "../schemas/ProductSchema";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductSchema.find()
        res.status(201).send(products)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await ProductSchema.findById(req.params.id)
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const insertProduct = async (req, res) => {
    try {
        const product = new ProductSchema({
            name: req.query.name,
            price: req.query.price,
            image: req.query.image,
            category: req.query.category,
            discountPrice: req.query.discountPrice
        })
        product.save()
        res.status(201).send({msg: "Product created"})
    } catch (error) {
        res.status(500).send({msg: error});
    }
};

export const updateProductById = async (req, res) => {
    try {
        const product = await ProductSchema.findByIdAndUpdate(req.params.id)
        if(product) {
            user.name = req.query.name,
            user.price = req.query.price,
            user.image = req.query.image,
            user.category = req.query.category,
            user.discountPrice = req.query.discountPrice          
            await product.save()
            res.send({msg: "Product Updated"})
        } else {
            res.status(404).json({message:"Not Found"})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

export const deleteProductById = async (req, res) => {
    try { 
        await ProductSchema.findByIdAndDelete(req.params.id) ? 
            res.status(200).send({msg: "Product Deleted"}) : 
                res.status(404).send({msg: "Not Found"})        
    } catch (error) {
        res.status(500).send({msg: error})
    }
};