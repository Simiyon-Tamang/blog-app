import { useEffect, useState } from "react";
import { usePostStore } from "../zustand/usePostStore";

const useFetchPostById = () => {
  const { selectedPost, setSelectedPost, clearPost } = usePostStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        setLoading(true);
        const response = await fetch(`api/auth/posts/${selectedPost.id}`);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        setSelectedPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostById();

    return () => {
      clearPost();
    };
  }, [selectedPost, setSelectedPost, clearPost]);
  return { post: selectedPost, loading, error };
};

export default useFetchPostById;
