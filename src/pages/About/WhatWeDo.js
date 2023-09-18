import React from "react";

const WhatWeDo = () => {
  const items = [
    {
      title: "Web Development",
      icon: "images/web.png",
      description:
        "Web development is the work involved in developing a website for the Internet or an intranet.",
    },
    {
      title: "Mobile Development",
      icon: "images/mobile.png",
      description:
        "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
    },
    {
      title: "Digital Marketing",
      icon: "images/digital-marketing.png",
      description:
        "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },

    {
      title: "Graphic Design",
      icon: "images/graphicdesign.png",
      description:
        "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },
  ];
  return <div className="mt-20">
    <h1 className="text-secondary text-8xl text-center">What We Do</h1>
  </div>;
};

export default WhatWeDo;
