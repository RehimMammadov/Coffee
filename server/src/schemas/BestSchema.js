import mongoose from "mongoose";

const bestSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
)

export default mongoose.model("Best", bestSchema);