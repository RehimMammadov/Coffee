import mongoose from "mongoose";

const popularSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { timestamps: true }
) 

export default mongoose.model('Popular', popularSchema);