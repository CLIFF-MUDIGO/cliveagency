import React from "react";

const MarketingStrategies = () => {
  const strategies = [
    {
      title: "CONTENT MARKETING",
      description:
        "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ",
      image: "images/content-marketing.png",
    },
    {
      title: "INBOUND MARKETING",
      description:
        "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ",
      image: "images/inbound-marketing.png",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ",
      image: "images/social-media.png",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
      image: "images/seo.png",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-semibold text-primary sm:mt-10">
        want to boost your business growth ?
      </h1>
      <h1 className="text-6xl font-semibold text-primary mt-10">
        The <b className="text-secondary">SOLUTION</b> is here...
      </h1>
      <p className="text-gray-600 text-xl mt-10">
        Curious about what business proffesionlas think of different Marketing
        strategies. We took a look at recent survey results and reports that
        compiled data on the topic, and created a list of 10 B2B Marketing
        strategies commonly recognized as successful regardness of industry.
        Here's what we found, in particular order:
      </p>
      <div className="grid grid-cols-2 gap-20 mt-10 sm:grid-cols-1">
        {strategies.map((item) => {
          return (
            <div className="border border-primary p-5 flex flex-col space-y-5 rounded transform hover:scale-x-105 duration-300">
              <h1 className="text-center -mt-8 bg-white border-primary border text-2xl rounded text-secondary py-2">
                {item.title}
              </h1>
              <img src={item.image} alt="" className="h-24 w-24" />
              <p className="text-gray-600 text-md hover:text-primary">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketingStrategies;
