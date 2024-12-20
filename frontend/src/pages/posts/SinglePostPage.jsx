import React from "react";

import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";
import CommentContainer from "../../components/comments/CommentContainer";

import { usePostStore } from "../../zustand/usePostStore";

const SinglePostPage = () => {
  const selectedPost = usePostStore((state) => state.selectedPost);
  // console.log("Selected post id: ", selectedPost.id);
  return (
    <div>
      <Navbar />
      {selectedPost ? (
        <>
          <Post post={selectedPost} />
          <CommentContainer postId={selectedPost.id} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SinglePostPage;
