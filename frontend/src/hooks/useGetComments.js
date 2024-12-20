import React from "react";

const useGetComments = () => {
  const [loading, setLoading] = React.useState(false);
  const getComments = async (postId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/auth/posts/${postId}/comments`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error in useGetComments hook", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getComments };
};

export default useGetComments;
