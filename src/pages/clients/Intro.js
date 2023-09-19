import React from "react";

const Intro = () => {
  return (
    <div className="min-h-screen bg-primary grid grid-cols-2 items-center sm:grid-cols-1 sm:p-5">
      <div className="h-[500px]">
      <lottie-player
          src="https://lottie.host/76d524df-f555-4430-874c-213cd2126477/xMk7fME62Z.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
  
      <div>
      <h1 className="text-8xl font-semibold text-white sm:text-5xl">We <b className="text-secondary">work</b> together with our <b className="text-green-500">clients</b></h1>
      </div>
    </div>
  );
};

export default Intro;
