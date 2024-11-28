import express from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create-post", protectRoute, createPost);
router.get("/posts", protectRoute, getPosts);

export default router;
