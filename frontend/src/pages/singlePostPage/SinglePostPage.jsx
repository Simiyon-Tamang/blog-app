import React from "react";

const SinglePostPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg mb-6">{post.content}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>By {post.author}</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
