import { useState } from "react";
import { usePostStore } from "../zustand/usePostStore";
import toast from "react-hot-toast";
const useWriteComment = () => {
  const [loading, setLoading] = useState(false);
  const { selectedPost } = usePostStore();

  const writeComment = async (comment) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/posts/${selectedPost.id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, writeComment };
};

export default useWriteComment;
