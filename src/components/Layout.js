import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const MenuItems = [
    {
      Title: "Home",
      Path: "/",
      Icon: "ri-home-line",
    },
    {
      Title: "About",
      Path: "/about",
      Icon: "ri-information-line",
    },
    {
      Title: "Client",
      Path: "/client",
      Icon: "ri-user-line",
    },
    {
      Title: "Contact",
      Path: "/contact",
      Icon: "ri-contacts-fill",
    },
  ];
  return (
    <div>
      {/*content*/}
      <div className="pb-44">{children}</div>
      {/*footer*/}
      <div className="fixed bottom-0 right-0 left-0">
        <div className="flex justify-center w-full ">
          {MenuItems.map((item, index) => (
            <div className="flex flex-col justify-end items-center">

              {location.pathname === item.Path && (<div className="flex flex-col items-center">
                <div className="h-5 w-10 bg-primary rounded-t-full">

                </div>
                <div className="h-5 w-20 bg-primary rounded-t-full text-center">
                  <i className={`${item.Icon} text-white text-xl`}></i>

                </div>
              </div>)}


              <div
                className={`px-20 bg-primary py-5 ${index === 0 ? "rounded-l" : ""}${index === MenuItems.length - 1 ? "rounded-r" : ""} flex items-center justify-center space-x-2 `}
              >
                {location.pathname !== item.Path && <i className={`${item.Icon} text-secondary text-xl`}></i>}

                <Link to={`${item.Path}`} className="text-secondary text-xl">
                  {item.Title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
