import React from "react";
import PostContainer from "../../components/post/PostContainer";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <PostContainer />
    </div>
  );
};

export default Home;
