import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ProfileHome from '../components/ProfileHome';
import { useSelector } from 'react-redux';
import SidebarComponent from '../components/SidebarComponent';
import SideBar2 from '../components/SideBarComponent2';
import { useMediaQuery } from 'react-responsive';

const UserProfileComponent = () => {
  const user = useSelector((state) => state?.user);
  const role = user?.userFound?.role;

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 });
 
  console.log(role, "usuario en profile");

  return (
    <div className='pb-20'>
      <NavbarComponent />
      <div className='flex flex-row bg-black'>
        {/* Renderiza SidebarComponent si el rol del usuario es uno, de lo contrario renderiza SideBar2 */}
        {isDesktopOrLaptop && role === "1" ? <SidebarComponent /> : <SideBar2 />}
        <ProfileHome user={user} className={role === "1" ? "flex-3" : "flex-4"} />
      </div>
      {/* Si el dispositivo no es de escritorio y el rol del usuario es uno, renderiza SidebarComponent */}
      {!isDesktopOrLaptop && role === "1" && <SidebarComponent isMobile />}
    </div>
  );
}

export default UserProfileComponent;
