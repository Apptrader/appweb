import React from "react";
import { Link } from "react-router-dom";
import { IoIosFilm, IoIosListBox } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { useMediaQuery } from 'react-responsive';
import getParamsEnv from "../functions/getParamsEnv";

const { VITE_USERS, VITE_VIDEOS_PANEL, VITE_PLANS_PANEL, VITE_CHAPTERS_PANEL } = getParamsEnv();

const renderIcon = (iconName, size) => {
  switch (iconName) {
    case "videos":
      return <IoIosFilm className="w-6 h-6 text-white hover:text-gray-500" />;
    case "users":
      return <HiMiniUserGroup className="w-6 h-6 text-white hover:text-gray-500" />;
    case "plans":
      return <IoIosListBox className="w-6 h-6 text-white hover:text-gray-500" />;
    case "chapters":
      return <IoIosListBox className="w-6 h-6 text-white hover:text-gray-500" />;
          
    default:
      return null;
  }
};

const SideBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      style={isMobile ? { bottom: 0, position: "fixed", width: "100%", zIndex: 1000 } : { minHeight: 'calc(100vh - 80px)' }}
      className={`bg-black ${isMobile ? "flex justify-around items-center p-3" : "w-full md:w-14 md:flex md:flex-col md:items-center md:gap-8"} pointer-events-auto shadow-md shadow-gray dark:shadow-gray-100 dark:bg-darkPrimary dark:text-gray relative`}
    >
      {!isMobile && <hr className="w-full md:w-14 h-[1px] bg-blue-500 border-0" />}
      <Link to={VITE_USERS}>{renderIcon("users", isMobile ? "w-10 h-10" : "w-6 h-6")}</Link>
      <Link to={VITE_VIDEOS_PANEL}>{renderIcon("videos", isMobile ? "w-10 h-10" : "w-6 h-6")}</Link>
      <Link to={VITE_PLANS_PANEL}>{renderIcon("plans", isMobile ? "w-10 h-10" : "w-6 h-6")}</Link>
      <Link to={VITE_CHAPTERS_PANEL}>{renderIcon("chapters", isMobile ? "w-10 h-10" : "w-6 h-6")}</Link>
      {!isMobile && <hr className="w-full md:w-14 h-[1px] bg-blue-500 border-0" />}
    </div>
  );
};

export default SideBar;