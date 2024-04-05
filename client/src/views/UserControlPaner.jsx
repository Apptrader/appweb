import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SidebarComponent from '../components/SidebarComponent'
import { useSelector } from 'react-redux';

import PaidPlansTable from '../components/PaidPlansTable';
import UserControlPanelComponent from '../components/UserControlPanelComponent';

const UserControlPanel = () => {

  const user = useSelector((state) => state?.user);


  const role = user?.userFound?.role;
   return (
        <div >
    
          <NavbarComponent />
          <div className='flex flex-row bg-black'>
          {role === "1" && <SidebarComponent className="flex-1" />}
            <UserControlPanelComponent />
          </div>
        </div>
      );
}

export default UserControlPanel