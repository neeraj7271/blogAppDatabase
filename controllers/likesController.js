import likeModel from "../models/likeModel.js";
import postModel from "../models/postModel.js";

export async function likeThePost(req, res)  {
    try {
        const {post, user} = req.body;

        const like = likeModel({
            post, user
        });

        const savedLike = await like.save();

        const updatedPost = await postModel.findByIdAndUpdate(post, {$push: {likes: savedLike._id } }, {new: true} ).populate("likes").exec();

        res.status(200).json({
            post: updatedPost,
        });
    } catch (error) {
        res.status(400).json({
            Error: "Error occured while liking the post",
        })
    }
}


export async function unlikeThePost(req, res) {
    try {
        const {post, like} = req.body;

        const deletedLike = await likeModel.findOneAndDelete({post: post, _id: like});

        const updatedPost = await postModel.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id } }, {new: true});

        res.json({
            post: updatedPost,
        })


    } catch (error) {
        res.status(400).json( {
            Error: "Error while unliking the post"
        })
    }
}
