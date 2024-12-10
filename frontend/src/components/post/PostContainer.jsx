import React from "react";
import Posts from "./Posts";
import useFetchPosts from "../../hooks/useFetchPosts";

const PostContainer = () => {
  const { posts, loading, error } = useFetchPosts();
  return (
    <div className="container mx-auto px-4">
      <div className="font-extrabold text-4xl text-violet-500 pt-5">
        Latest Posts
      </div>
      <div className="flex flex-col ">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default PostContainer;
