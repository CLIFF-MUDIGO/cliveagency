import React from "react";

const Numbers = () => {
  return (
    <div className=" p-40 mt-15">
        <h1 className="text-2xl text-gray-600 my-5">Until today we have provided our services to ....</h1>
      <div className="bg-secondary flex space-x-10 p-5 justify-between rounded">
        <div className="flex flex-col space-y-2">
          <h1 className=" text-9xl text-white">152</h1>
          <h1 className="text-white  text-2xl">Clients</h1>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-9xl text-white">452</h1>
          <h1 className="text-white  text-2xl">Projects</h1>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-9xl text-white">22</h1>
          <h1 className="text-white text-2xl">Locations</h1>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
