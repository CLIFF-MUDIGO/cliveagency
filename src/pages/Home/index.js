import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingStrategies from "./MarketingStrategies";
import WhyMarketing from "./WhyMarketing";

const Home = () => {
  return (
    <Layout>
      <div className="px-32">
      <Intro />
      <MarketingStrategies />
      <WhyMarketing />
      </div>
    </Layout>
    
  );
};

export default Home;
