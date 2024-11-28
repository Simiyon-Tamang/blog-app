import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user._id;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const newPost = new Post({
      title,
      content,
      author,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error in createPost controller");
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "_id fullName")
      .sort({ createdAt: -1 });
    const formattedPosts = posts.map((post) => ({
      id: post._id,
      title: post.title,
      content: post.content,
      author: {
        id: post.author._id,
        fullName: post.author.fullName,
      },
      createdAt: post.createdAt,
    }));

    res.status(200).json(formattedPosts);
  } catch (error) {
    console.log("Error in getPosts controller");
    res.status(500).json({ message: error.message });
  }
};
