import React from "react";

const Address = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>
          CLIVEGENCY is a digital martketing agency , we provide marketing and
          development services
        </p>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa6000f] p-2 rounded">
            <i className="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
          <h1 className="font-semibold text-xl">Visit Us</h1>
           
            <p>Nairobi, Kenya</p>
            
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa6000f] p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Mail Us</h1>
            <p>cmudigo5@gmail.com</p>
           
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa6000f] p-2 rounded">
            <i className="ri-phone-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Call Us</h1>
            <p>+254705949828</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
