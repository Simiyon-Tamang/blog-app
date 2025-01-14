import React, { useState } from "react";
import useWriteComment from "../../hooks/useWriteComment";
import toast from "react-hot-toast";

const CommentInput = ({ addCommentToState }) => {
  const [comment, setComment] = useState("");
  const { loading, writeComment } = useWriteComment();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment) {
      return;
    }
    await writeComment(comment);
    toast.success("Comment added successfully");
    addCommentToState(comment);
    setComment("");
  };

  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      {/* Parent container with flex to align children side by side */}
      <div className="flex items-center space-x-4">
        <textarea
          className="border text-sm rounded-lg border-gray-300 p-2 w-[700px] h-[100px] overflow-y-auto"
          placeholder="Add a comment ....."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
