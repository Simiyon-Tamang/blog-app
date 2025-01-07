import React from "react";
import { formatDateTime } from "../../utils/formatDateTime";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../../zustand/usePostStore";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  const setSelectedPost = usePostStore((state) => state.setSelectedPost);
  return (
    <div>
      {posts.map((post) => {
        const formattedTime = formatDateTime(post.createdAt);
        return (
          <div
            key={post.id}
            className="h-[180px] w-[max] bg-slate-200 flex rounded-xl m-4 shadow-md"
          >
            {post.media && (
              <div className="h-full w-[250px] p-4 text-white  rounded-l-xl">
                {/*<h1 className="text-[25px] pt-5 font-medium tracking-wide leading-[25px] max-h-[20px]">
                {post.title}
              </h1>*/}
                <img src={post.media} className="rounded-lg my-2 w-96 h-30" />
              </div>
            )}

            <div className="p-7 bg-white w-full rounded-r-xl relative">
              <div className="flex justify-between">
                <h1 className="text-[#949494] text-[13px] tracking-[.5px]">
                  {post.author.fullName}
                </h1>
                <div className="relative">
                  <p className="text-[#a8a8a8] text-[12px] tracking-[.5px] absolute right-0 w-[200px]">
                    {formattedTime}
                  </p>
                </div>
              </div>
              <h1 className="text-[24px] pt-2 font-[500] tracking-wide">
                {post.title}
              </h1>
              <div className="flex w-[950px] max-h-12 overflow-hidden">
                <p className="text-[#a8a8a8] text-[14px] tracking-[.5px] p-2 ">
                  {post.content}
                </p>
              </div>
              <button
                onClick={() => {
                  console.log(formattedTime);
                  setSelectedPost(post);
                  navigate(`/posts/${post.id}`);
                }}
                type="button"
                className="h-10 w-[120px] bg-[#261a6be8] text-white rounded-3xl tracking-wide absolute right-10 bottom-7 cursor-pointer hover:bg-[#4938b6e8]"
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
