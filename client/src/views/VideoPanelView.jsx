import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SidebarComponent from '../components/SidebarComponent'
import { useSelector } from 'react-redux';
import VideosTable from '../components/VideosTable';






const UsersView = () => {


   return (
        <div >
    
          <NavbarComponent />
          <div className='flex flex-row bg-black'>
          <SidebarComponent className="flex-1" />
            <VideosTable />
          </div>
        </div>
      );
}

export default UsersView