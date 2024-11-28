import Comment from "../models/comment.model.js";
import Comments from "../models/comments.model.js";
import Post from "../models/post.model.js";
import CommentData from "../models/commentData.model.js";
import mongoose from "mongoose";

export const createComment = async (req, res) => {
  try {
    const { content } = req.body; // Extracts 'content' from the request body
    const { postId } = req.params; // Extracts 'postId' from the route parameters
    const author = req.user._id; // Extracts the user ID from the request object

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = new Comment({
      content,
      author,
      postId,
    });
    await comment.save();
  } catch (error) {
    console.log("Error in createComment controller");
    res.status(500).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {};
