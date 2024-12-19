import React from "react";

import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";
import CommentContainer from "../../components/comments/CommentContainer";

import { usePostStore } from "../../zustand/usePostStore";

const SinglePostPage = () => {
  const selectedPost = usePostStore((state) => state.selectedPost);
  return (
    <div>
      <Navbar />
      {selectedPost ? <Post post={selectedPost} /> : <div>Loading...</div>}
      <CommentContainer />
    </div>
  );
};

export default SinglePostPage;
