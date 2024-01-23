import React from 'react';
import NavbarComponent from '../components/navbarComponent';
import SidebarComponent from '../components/sidebarComponent';
import ProfileHome from '../components/ProfileHome';

const UserProfileComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <div className='flex flex-row'>
        <SidebarComponent />
        <ProfileHome />
      </div>
    </div>
  );
}

export default UserProfileComponent;