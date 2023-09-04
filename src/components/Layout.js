import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const MenuItems = [
    {
      Title: "Home",
      Path: "/",
      Icon: "",
    },
    {
      Title: "About",
      Path: "/about",
      Icon: "",
    },
    {
      Title: "Client",
      Path: "/client",
      Icon: "",
    },
    {
      Title: "Contact",
      Path: "/contact",
      Icon: "",
    },
  ];
  return (
    <div>
      {/*content*/}
      <div className="">{children}</div>
      {/*footer*/}
      <div className="fixed bottom-0 right-0 left-0">
        <div className="flex justify-center w-full ">
          {MenuItems.map((item, index) => (
            <div
              className={`px-20 bg-primary py-5 ${index === 0 && "rounded-l"}${
                index === MenuItems.length - 1 && "rounded-r"
              }`}
            >
              <Link to={`${item.Path}`} className="text-secondary">
                {item.Title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
