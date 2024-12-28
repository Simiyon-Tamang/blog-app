import React from "react";

import Navbar from "../navbar/Navbar";

import { AuthContext } from "../../context/AuthContext";
import { use } from "react";

const WritePost = () => {
  const { authUser } = React.useContext(AuthContext);
  const username = authUser.userName;
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
          <form>
            <textarea
              className="block w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-700 focus:ring-[#7747FF] focus:border-[#7747FF] h-96 resize-none"
              placeholder="What's on your mind?"
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
