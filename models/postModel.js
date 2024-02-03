import mongoose from "mongoose"

// route handler

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
    }]
});


export default mongoose.model("post", postSchema);