import express from "express";
import {
  createPost,
  getPosts,
  uploadAuth,
} from "../controllers/post.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create-post", protectRoute, createPost);
router.get("/posts/:postId?", protectRoute, getPosts);
router.get("/posts/upload-auth", protectRoute, uploadAuth);

export default router;
