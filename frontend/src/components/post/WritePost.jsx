import React, { useState } from "react";

import Navbar from "../navbar/Navbar";

import { AuthContext } from "../../context/AuthContext";
import useWritePost from "../../hooks/useWritePost";
import useImageUpload from "../../hooks/useImageUpload";
import toast from "react-hot-toast";
import { IKContext, IKUpload } from "imagekitio-react";

console.log(import.meta.env.VITE_IK_PUBLIC_KEY);

const authenticator = async () => {
  try {
    const response = await fetch("api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const WritePost = () => {
  const { authUser } = React.useContext(AuthContext);
  const { loading, writePost } = useWritePost();
  const { handleImageUpload } = useImageUpload();

  const [image, setImage] = useState(null); // Store the selected image file
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const username = authUser.userName;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await writePost(title, body);
    await handleImageUpload(image, setImageUrl);
    if (!loading) {
      setTitle("");
      setBody("");
    }
    toast.success("Post created successfully");
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col items-center">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-center mt-10 pb-6 text-gray-800">
          Create a New Post
        </h1>

        {/* Post Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          {/* User Avatar */}
          <div className="flex items-center mb-6 space-x-4">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="w-16 h-16 rounded-full shadow-md object-cover"
            />
            <h1 className="text-xl font-bold">{username}</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-lg mb-2 p-4 text-sm text-gray-700 focus:ring-[#7747FF] focus:border-[#7747FF]"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="block w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-700 focus:ring-[#7747FF] focus:border-[#7747FF] h-96 resize-none"
              placeholder="What's on your mind?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <h2 className="mt-2">Add photo for your post:</h2>
            <IKContext
              publicKey="public_U8xuxl5i0wb6D8SbQAJrAvjNnFQ="
              urlEndpoint="https://ik.imagekit.io/olermup8h"
              authenticator={authenticator}
            >
              <IKUpload
                fileName="test-upload.png"
                onError={(error) => {
                  console.log(error);
                }}
                onSuccess={(res) => {
                  setImageUrl(res.url);
                }}
              ></IKUpload>
            </IKContext>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full mt-3 max-w-xs"
              onChange={handleFileChange}
            />
            <button
              type="submit"
              className="mt-6 w-full py-3 rounded-xl bg-[#7747FF] text-white font-semibold hover:bg-[#5a37cc] focus:ring-4 focus:ring-[#a985ff] transition-all"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WritePost;
