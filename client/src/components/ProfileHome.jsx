import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from 'react-redux';
import ProfileDetail from "./ProfileDetail";
import ReferralTree from "./ReferralTree";

const ProfileHome = () => {
  const user = useSelector((state) => state?.user);





  return (
    <div className='container m-auto'>
      <div className='flex flex-row gap-5 p-20'>
        <div className='bg-gray-900 w-2/3' style={{ flex: '1', padding: '20px' }}>
          <ReferralTree />
        </div>
        <div className='bg-gray-900 ' style={{ flex: '1', padding: '20px' }}>
          <ProfileCard user={user} />
        </div>
        <div className='bg-gray-900' style={{ flex: '1', padding: '20px' }}>
          <ProfileDetail />
        </div>
      </div>
    </div>
  );
}

export default ProfileHome;
