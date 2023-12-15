import mongoose from "mongoose";

const newArticleSchema = new mongoose.Schema(
    {
        description: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
)

export default mongoose.model("NewArticle", newArticleSchema);