import React from 'react';

const ProfileDetail = () => {
  return (
    <div className='card bg-gradient-to-br from-gray-700 to-black text-white p-4 shadow-md rounded-lg'>
      <div className='p-4 w-full'>
        <p className='text-center pt-4 pb-4'>Current GV</p>
        <p
          className='m-auto text-center p-2 text-2xl font-bold mt-2 border border-gray-300 rounded-full w-1/3'
          style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}
        >
          $2825.25
        </p>
      </div>
      <div className='p-4 text-white font-bold'>
        <ul className='list-none p-0 m-0'>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Current Rank:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Current Qualified Enrollment Volume:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>QEV Needed For Next Rank:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Personal Enrollments Needed:</span>
            <span>texto</span>
          </li>
          {/* Los últimos cuatro en dos columnas */}
          <div className='grid grid-cols-2'>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-r-8 border-black'>
              <span>Active Left:</span>
              <span>texto</span>
            </li>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-l-8 border-black'>
              <span>Active Right:</span>
              <span>texto</span>
            </li>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-r-8 border-black'>
              <span>BV Left:</span>
              <span>texto</span>
            </li>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-l-8 border-black'>
              <span>BV Right:</span>
              <span>texto</span>
            </li>
          </div>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Personal Enrollments Needed:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Personal Enrollments Needed:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Personal Enrollments Needed:</span>
            <span>texto</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetail;