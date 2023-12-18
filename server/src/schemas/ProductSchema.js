import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        discountPrice: { type: Number, required: true, unique: null, nullable: true }
    },
    { timestamps: true }
) 

export default mongoose.model('Menu', productSchema);