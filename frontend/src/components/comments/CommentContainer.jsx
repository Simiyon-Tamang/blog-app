import React, { useState } from "react";
import CommentInput from "./CommentInput";
const CommentContainer = () => {
  return (
    <div className="flex flex-col my-3 justify-center items-center">
      <CommentInput />
      <span>Test comment</span>
      <span>Test comment</span>
      <span>Test comment</span>
      <span>Test comment</span>
    </div>
  );
};

export default CommentContainer;
