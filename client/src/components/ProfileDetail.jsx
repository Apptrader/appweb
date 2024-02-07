import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ProfileDetail = ({ rankNames, userInfo, token }) => {
  const [nextRank, setNextRank] = useState(null);

  const totalNodos = useSelector((state) => state?.nodes)







  useEffect(() => {
    const getNextRank = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/rank/getNextRankById", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });
        const result = response.data;
        console.log(result);
        setNextRank(result);
      } catch (error) {
        console.error('Error al obtener el siguiente rango:', error);
      }
    };

    getNextRank();
  }, []);

  const totalGV = userInfo.pointsLeft + userInfo.pointsRight;

  if(totalNodos) {

  return (
    <div className='card bg-gradient-to-br from-gray-700 to-black text-white p-4 shadow-md rounded-lg'>
      <div className='p-4 w-full'>
        <p className='text-center pt-4 pb-4'>Current GV</p>
        <p
          className='m-auto text-center p-2 text-2xl font-bold mt-2 border border-gray-300 rounded-full w-1/3'
          style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}
        >
          {totalGV}
        </p>
      </div>
      <div className='p-4 text-white font-bold'>
        <ul className='list-none p-0 m-0'>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Current Rank:</span>
            <span>{rankNames.rankId}</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Current Qualified Enrollment Volume:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>QEV Needed For Next Rank:</span>
            {nextRank !== null ? <span>{nextRank.points - totalGV}</span> : <span>-</span>}
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Personal Enrollments Needed:</span>
            <span>{userInfo.rank.left} Left -- {userInfo.rank.right} Right</span>
          </li>
          {/* Los últimos cuatro en dos columnas */}
          <div className='grid grid-cols-2'>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-r-8 border-black'>
              <span>Active Left:</span>
              <span>{totalNodos.left}</span>
            </li>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-l-8 border-black'>
              <span>Active Right:</span>
              <span>{totalNodos.right}</span>
            </li>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-r-8 border-black'>
              <span>BV Left:</span>
              <span>{userInfo.pointsLeft || 0}</span>
            </li>
            <li className='flex flex-col p-2 items-center py-2 border-b-8 border-l-8 border-black'>
              <span>BV Right:</span>
              <span>{userInfo.pointsRight || 0}</span>
            </li>
          </div>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Personal Enrollments Needed:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>QEV Flushing this week:</span>
            <span>texto</span>
          </li>
          <li className='flex flex-col p-2 items-center py-2 border-b-8 border-t-8 border-black'>
            <span>Proyected QEV On Friday:</span>
            <span>texto</span>
          </li>
        </ul>
      </div>
    </div>
  );} else {
    return <p>cargando</p>
  }
};

export default ProfileDetail;
