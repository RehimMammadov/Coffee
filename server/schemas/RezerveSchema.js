import mongoose from "mongoose";

const reserveSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        phone: { type: String, unique: true, required: true },
        seates: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true }
    },
    { timestamps: true } 
)

export default mongoose.model("Reserve", reserveSchema);