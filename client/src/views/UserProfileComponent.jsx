import React from 'react';
import NavbarComponent from '../components/navbarComponent';
import ProfileHome from '../components/ProfileHome';


const UserProfileComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <div className='bg-black'>
        
        <ProfileHome/>
  
      </div>
    </div>
  );
}

export default UserProfileComponent;