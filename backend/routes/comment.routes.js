import express from "express";
import {
  createComment,
  createCommentData,
  deleteComment,
} from "../controllers/comment.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create-comment", protectRoute, createComment);
router.get("/get-comment", protectRoute, getComments);
router.delete("/delete-comment/:commentId", protectRoute, deleteComment);

export default router;
