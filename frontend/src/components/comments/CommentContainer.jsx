import React, { useEffect, useState } from "react";
import CommentInput from "./CommentInput";

import useGetComments from "../../hooks/useGetComments";

const CommentContainer = ({ postId }) => {
  //console.log("Post id in CommentContainer: ", postId);
  const { loading, getComments } = useGetComments();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!postId) {
      console.log("No postId available yet");
      return;
    }
    const fetchComments = async () => {
      try {
        const fetchedComments = await getComments(postId);
        setComments(fetchedComments);
      } catch (error) {
        console.log("Error in CommentContainer", error);
      }
    };
    fetchComments();
  }, [postId]);
  return (
    <div className="flex flex-col my-3 justify-center items-center">
      <CommentInput />
      <div className="flex flex-col items-center justify-center">
        {loading ? (
          <div>Loading comments...</div>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="border p-2 my-2 w-[700px]">
              <p>{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentContainer;
