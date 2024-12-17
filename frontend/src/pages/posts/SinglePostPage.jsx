import React from "react";
import { usePostStore } from "../../zustand/usePostStore";
import useFetchPostById from "../../hooks/useFetchPostById";
import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";
import CommentContainer from "../../components/comments/CommentContainer";

const SinglePostPage = () => {
  const selectedPost = usePostStore((state) => state.selectedPost);
  const { post, loading, error } = useFetchPostById();
  return (
    <div>
      <Navbar />
      {post ? (
        <Post post={selectedPost} />
      ) : (
        <div>{loading ? "Loading..." : error}</div>
      )}
      <CommentContainer />
    </div>
  );
};

export default SinglePostPage;
