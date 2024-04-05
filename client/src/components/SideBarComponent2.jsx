import React from "react";
import { Link } from "react-router-dom";
import { IoIosFilm,  } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { useMediaQuery } from 'react-responsive';
import getParamsEnv from "../functions/getParamsEnv";

const { VITE_USERS, VITE_USER_PANEL } = getParamsEnv();

const renderIcon = (iconName, size) => {
  switch (iconName) {
    case "userControl":
      return <HiOutlineUser className="w-6 h-6 text-white hover:text-gray-500" />;
          
    default:
      return null;
  }
};

const SideBar2 = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      style={isMobile ? { bottom: 0, position: "fixed", width: "100%", zIndex: 1000 } : { minHeight: 'calc(100vh - 80px)' }}
      className={`bg-black ${isMobile ? "flex justify-around items-center p-3" : "w-full md:w-14 md:flex md:flex-col md:items-center md:gap-8"} pointer-events-auto shadow-md shadow-gray dark:shadow-gray-100 dark:bg-darkPrimary dark:text-gray relative`}
    >
      {!isMobile && <hr className="w-full md:w-14 h-[1px] bg-blue-500 border-0" />}
      
      <Link to={VITE_USER_PANEL}>{renderIcon("userControl", isMobile ? "w-10 h-10" : "w-6 h-6")}</Link>
      
      {!isMobile && <hr className="w-full md:w-14 h-[1px] bg-blue-500 border-0" />}
    </div>
  );
};

export default SideBar2;