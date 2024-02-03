import mongoose from "mongoose";

// route handler
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String, 
        required: true,
    }
})

export default mongoose.model("comment", commentSchema);