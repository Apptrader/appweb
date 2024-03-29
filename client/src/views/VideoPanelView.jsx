import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import SidebarComponent from '../components/SidebarComponent';
import VideosTable from '../components/VideosTable';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const UsersView = () => {
  const user = useSelector((state) => state?.user);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const role = user?.userFound?.role;

  return (
    <div>
      <NavbarComponent />
      <div className='flex flex-col bg-black'>
        {isDesktopOrLaptop ? (
          <div className='flex flex-row'>
            {role === "1" && <SidebarComponent />}
            <VideosTable />
          </div>
        ) : (
          <>
            <div className='flex flex-row'>
              <VideosTable />
            </div>
            {role === "1" && <SidebarComponent isMobile />}
          </>
        )}
      </div>
    </div>
  );
}

export default UsersView;