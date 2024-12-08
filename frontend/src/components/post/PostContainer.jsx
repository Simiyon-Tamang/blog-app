import React from "react";
import Posts from "./Posts";

const PostContainer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="font-extrabold text-4xl text-violet-500 pt-5">
        Latest Posts
      </div>
      <div className="flex flex-col ">
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default PostContainer;
