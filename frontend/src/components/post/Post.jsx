import React from "react";
import Image from "../image/image";

import { formatDateTime } from "../../utils/formatDateTime";

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  const formattedDateTime = formatDateTime(post.createdAt);
  console.log(post);
  return (
    <div>
      <div className="container max-w-6xl mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-center items-center">
            {post.media && (
              <img src={post.media} className="rounded m-2 mb-6" />
            )}
          </div>
          <p className="text-gray-700 text-lg mb-6">{post.content}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>By: {post.author.fullName}</span>
            <span>{formattedDateTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
