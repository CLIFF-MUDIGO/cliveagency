import React from "react";

const WhyMarketing = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-8xl font-semibold text-primary sm:text-6xl">
        Why <b className="text-secondary">Marketing</b> ?
      </h1>
      <div className="h-[500px]">
        <lottie-player
          src="https://lottie.host/23dad027-ef7d-4fc7-8b19-f166d6246ed9/DH7g3an540.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="text-gray-600 text-md mt-10">
        Do you know what your customer want? Do you think your customer trust
        your productts? When was the last time you saw a customer tweeting about
        your product or service? was it a complaint or a compliment?
      </p>
      <h1 className="text-primary text-4xl font-semibold mt-10">
        The answer to all these questions lie in Marketing
      </h1>
      <p className="text-gray-600 text-md mt-10">
        How you market your business determines if the enterprise will Be
        successful or not.Marketing is a tool used to create and maintain,
        demand,relevance,reputation,competition and more.Withoutt it, your
        business is like;y to close down due to lack of sales
      </p>
    </div>
  );
};

export default WhyMarketing;
