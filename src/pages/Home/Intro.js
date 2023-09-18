import React from "react";

const Intro = () => {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <div className="flex flex-col space-y-10">
        <h1 className="text-6xl font-semibond text-primary">The Best <br /> <b className="text-secondary">Marketing</b></h1>
        <h1 className="text-4xl font-semibold">Doesn't feel like Marketing</h1>
        <button className=" px-14 py-4 bg-secondary text-xl text-white max-w-max">Get Started</button>
      </div>
      <div className="p-10">
        <lottie-player
          src="https://lottie.host/455b50c9-d97b-4840-a108-98e6796c06a3/u9xt1MhsLL.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Intro;
