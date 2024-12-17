import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("api/auth/posts");
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [id]); // Fetch posts on component mount

  return { posts, loading, error };
};

export default useFetchPosts;
