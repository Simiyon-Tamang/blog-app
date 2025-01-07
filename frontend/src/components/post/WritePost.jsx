import React, { useState } from "react";

import Navbar from "../navbar/Navbar";

import { AuthContext } from "../../context/AuthContext";
import useWritePost from "../../hooks/useWritePost";
import toast from "react-hot-toast";
import Upload from "../image/Upload";

const WritePost = () => {
  const { authUser } = React.useContext(AuthContext);
  const { loading, writePost } = useWritePost();

  const [image, setImage] = useState(null); // Store the selected image file
  const [video, setVideo] = useState(null); // Store the selected video file
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const username = authUser.userName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mediaUrl = imageUrl || videoUrl;

    await writePost(title, body, mediaUrl);
    if (!loading) {
      setTitle("");
      setBody("");
      setImageUrl(null);
      setVideo(null);
    }
    console.log(imageUrl);
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
            <h2 className="mt-2">Add photo or video for your post:</h2>
            <div className="flex items-center space-x-4 mt-2">
              {imageUrl && (
                <img
                  src={imageUrl ? imageUrl : ""}
                  alt="Image Preview"
                  className="w-24 h-20 object-cover rounded-lg"
                />
              )}
              <Upload type="image" setData={setImage} setUrl={setImageUrl}>
                🌆
              </Upload>
              <Upload type="video" setData={setVideo} setUrl={setVideoUrl}>
                ▶️
              </Upload>
            </div>

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
