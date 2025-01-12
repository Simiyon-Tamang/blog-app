import React from "react";
import { formatDateTime } from "../../utils/formatDateTime";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../../zustand/usePostStore";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  const setSelectedPost = usePostStore((state) => state.setSelectedPost);
  const getLatestPostWithMedia = () => {
    for (let i = posts.length - 1; i >= 0; i--) {
      if (posts[i].media) {
        return posts[i];
      }
    }
    return null; // No posts with media found
  };
  const latestPostWithMedia = getLatestPostWithMedia();

  const firstThreePost = posts.slice(0, 3);
  const nextThreePost = posts.slice(3, 6);
  return (
    <div>
      <div className="flex flex-row justify-center space-x-5 items-center">
        <div className="flex flex-col justify-between w-full h-96">
          {firstThreePost.map((post, index) => {
            return (
              <div className="bg-slate-200">
                <div
                  className=" flex items-center justify-center m-2 h-20"
                  key={post.id}
                >
                  <h1 className="font-bold text-lg ">{post.title}</h1>
                </div>
                {index != 2 && <div className="divider"></div>}
              </div>
            );
          })}
        </div>

        {latestPostWithMedia && (
          <img
            src={latestPostWithMedia.media}
            className="w-auto h-96 shadow-lg shadow-blue-300 rounded-xl m-4"
          />
        )}

        <div className="flex flex-col justify-between w-full h-96">
          {nextThreePost.map((post, index) => {
            return (
              <div>
                <div
                  className="bg-slate-200 flex items-center justify-center m-2 h-20"
                  key={post.id}
                >
                  <h1 className="font-bold text-lg">{post.title}</h1>
                </div>
                {index != 2 && <div className="divider"></div>}
              </div>
            );
          })}
        </div>
      </div>
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
