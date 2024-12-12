import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "../image/image";

const Post = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-6xl mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-4">Title</h1>
          <div className="flex justify-center items-center">
            <Image
              src="everest.jpg"
              w={650}
              h={400}
              className={"rounded m-2 mb-6"}
            />
          </div>
          <p className="text-gray-700 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi
            est expedita cupiditate, dignissimos velit, accusantium dolor atque
            aliquam eos odit quisquam quidem aliquid, impedit quaerat veritatis
            modi voluptate quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt necessitatibus iure porro distinctio
            pariatur, nostrum itaque vero veritatis perferendis quo? Architecto
            veritatis molestiae animi, fuga quia dolorum sint a sequi. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Deleniti, culpa
            ipsam cumque impedit amet nihil dolore blanditiis dolor
            necessitatibus aliquid corporis veniam voluptatum mollitia unde
            dolorum distinctio at quaerat optio. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quaerat, illum aspernatur facilis ab
            et saepe, placeat dolore earum dolorum consectetur minus
            accusantium. Iure veritatis voluptas fugit ratione consequuntur,
            quisquam itaque.
          </p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>By Mack Smith</span>
            <span>2024-12-11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
