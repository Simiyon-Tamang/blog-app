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
      post: postId,
    });
    await comment.save();
    return res.status(201).json(comment);
  } catch (error) {
    console.log("Error in createComment controller");
    res.status(500).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const commments = await Comment.find({ post: postId }) //post : postId is the query to find the comments of the post with the given postId
      .populate("user", "fullName")
      .sort({ createdAt: -1 });

    res.status(200).json(commments);
  } catch (error) {
    console.log("Error in getComments controller");
    res.status(500).json({ message: error.message });
  }
};
