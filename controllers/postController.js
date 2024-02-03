
import postModel from "../models/postModel.js";



export async function createPost(req, res) {

    try {
        const {title, body} =  req.body;

        const post = new postModel({
            title, body,
        })
    
        const savedPost = await post.save();
    
        res.status(200).json({
            post: savedPost,
        })
    } catch (error) {
        res.status(400).json({
            error: "Error while creating the post",
        })
    }
   

}


export async function fetchAllPost(req, res) {
    try {
        const post = await postModel.find().populate("comments").populate("likes").exec();

        res.status(200).json({
            post: post
        })

    } catch (error) {
        res.status(404).json({
            Error: "Could'nt find the post"
        })
    }
}