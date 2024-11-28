import express from "express";
import {
  createComment,
  getComments,
} from "../controllers/comment.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/posts/:postId/comments", protectRoute, createComment);
router.get("/posts/:postId/comments", protectRoute, getComments);
//router.delete("/delete-comment/:commentId", protectRoute, deleteComment);

export default router;
