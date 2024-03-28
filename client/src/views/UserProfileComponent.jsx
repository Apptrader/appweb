import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ProfileHome from '../components/ProfileHome';
import { useSelector } from 'react-redux';
import SidebarComponent from '../components/SidebarComponent';
import { useMediaQuery } from 'react-responsive';

const UserProfileComponent = () => {
  const user = useSelector((state) => state?.user);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const role = user?.userFound?.role;

  console.log(role, "usuario en profile");

  return (
    <div className='pb-20'>
      <NavbarComponent />
      <div className='flex flex-col bg-black'>
        <ProfileHome user={user} className={role === 1 ? "flex-3" : "flex-4"} />
        {isDesktopOrLaptop && role === "1" && <SidebarComponent />}
      </div>
      {!isDesktopOrLaptop && role === "1" && <SidebarComponent isMobile />}
    </div>
  );
}

export default UserProfileComponent;