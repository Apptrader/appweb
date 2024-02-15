import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SidebarComponent from '../components/SidebarComponent'
import UsersTable from '../components/UsersTable';
import axios from 'axios';
import getParamsEnv from '../functions/getParamsEnv';
import { useSelector } from 'react-redux';
import { setUser } from '../redux/actions';

const {API_URL_BASE} = getParamsEnv()



const UsersView = () => {

  const user = useSelector((state) => state?.user);

  // Verifica si user y user.userFound no son null o undefined antes de acceder a la propiedad role
  const role = user?.userFound?.role;

   return (
        <div >
    
          <NavbarComponent />
          <div className='flex flex-row bg-black'>
          {role === "1" && <SidebarComponent className="flex-1" />}
            <UsersTable/>
          </div>
        </div>
      );
}

export default UsersView
