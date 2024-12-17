import React, { useState } from "react";
import { usePostStore } from "../../zustand/usePostStore";
const useWriteComment = () => {
  const [loading, setLoading] = useState(false);
  const { selectedPost } = usePostStore();

  const writeComment = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api//posts/${selectedPost._id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
  };
};

export default useWriteComment;
