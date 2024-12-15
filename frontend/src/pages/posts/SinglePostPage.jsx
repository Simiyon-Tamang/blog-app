import React from "react";
import { usePostStore } from "../../zustand/usePostStore";
import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";
import CommentContainer from "../../components/comments/CommentContainer";

const SinglePostPage = () => {
  const selectedPost = usePostStore((state) => state.selectedPost);
  return (
    <div>
      <Navbar />
      <Post post={selectedPost} />
      <CommentContainer />
    </div>
  );
};

export default SinglePostPage;
