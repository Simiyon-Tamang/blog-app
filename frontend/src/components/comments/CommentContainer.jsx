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
    <div className="flex flex-col my-3 justify-center items-center ">
      <CommentInput />
      <div className="flex flex-col py-2 items-center justify-center">
        {loading ? (
          <div>Loading comments...</div>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="flex space-x-3 my-2 ">
              <div className="flex w-10 items-center justify-center">
                <img
                  className="w-10 h-10 rounded-full shadow-sm"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
              <div className="border rounded-lg shadow-md p-2 my-3 w-[700px]">
                <h3 className="font-bold text-lg text-blue-400">
                  {comment.author.fullName}
                </h3>
                <div className="flex justify-between">
                  <p className="text-sm">{comment.content}</p>
                  <p className="text-xs text-gray-400">{comment.createdAt}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentContainer;
