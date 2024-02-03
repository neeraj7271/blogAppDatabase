import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
    },
    user:{
        type: String,
        required: true,
    }
});


export default mongoose.model("like", likeSchema);