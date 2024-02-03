import express from "express";


const router = express.Router();

//import controllers
import { createPost, fetchAllPost } from "../controllers/postController.js";
import { createComment } from "../controllers/commentController.js";
import { likeThePost, unlikeThePost } from "../controllers/likesController.js";



//map controllers to the respective routes
router.post("/createPost", createPost);
router.get("/posts", fetchAllPost);
router.post("/comment", createComment);
router.post("/likes/like", likeThePost)
router.post("/likes/unlike", unlikeThePost)

export default router;