import React, { useState } from "react";
import toast from "react-hot-toast";

const useWritePost = () => {
  const [loading, setLoading] = useState(false);

  const writePost = async (title, body, mediaUrl) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/create-post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, content: body, media: mediaUrl }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error("Failed to create post");
    } finally {
      setLoading(false);
    }
  };
  return { loading, writePost };
};

export default useWritePost;
