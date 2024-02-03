import commentModel from "../models/commentModel.js";
import postModel from "../models/postModel.js";

export async function createComment(req, res) {
    try {
        const {post, body, user} = req.body;
        
        const comment = new commentModel({
            post, body, user
        });

        const savedComment = await comment.save();

        const updatedPost = await postModel.findByIdAndUpdate(post, {$push: {comments: savedComment._id } }, {new: true}).populate("comments").exec();

        res.status(200).json({
            post: updatedPost
        })

    } catch (error) {
        res.status(400).json({
            Error: "Unable to comment on the post"
        })
    }
}

