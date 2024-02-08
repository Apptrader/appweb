import React from 'react';
import NavbarComponent from '../components/navbarComponent';
import ProfileHome from '../components/ProfileHome';
import { useLocation } from 'react-router-dom';
import NodeProfileHome from '../components/NodeProfileHome';


const NodeProfile = () => {

    const {state} = useLocation()
    const user = state? state.user : null

    console.log(user)

  return (
    <div>
      <NavbarComponent />
      <div className='bg-black'>
        
        <NodeProfileHome user={user} />
  
      </div>
    </div>
  );
}

export default NodeProfile;