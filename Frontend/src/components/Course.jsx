import React from "react";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            we'are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quo et enim vel totam optio aliquid, similique est quidem nisi atque
            pariatur modi ipsa praesentium eaque soluta nemo fuga sed! Corporis
            quae nostrum rerum mollitia odio eligendi, aperiam voluptatem
            reprehenderit labore nisi aliquid impedit, provident esse vel
            necessitatibus quis odit.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Course;
