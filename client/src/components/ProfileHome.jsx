import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from 'react-redux';
import ProfileDetail from "./ProfileDetail";
import ReferralTree from "./ReferralTree";
import axios from "axios";
import getParamsEnv from "../functions/getParamsEnv";

const {API_URL_BASE} = getParamsEnv()

const ProfileHome = ({user}) => {

  const [rankNames, setRankNames] = useState({
    rankId: "",
    highestRankId: ""
  })

  const [isLoading, setIsLoading] = useState(true)

 


  const userInfo = user.userFound
  const [referred, setReferred] = useState({})

  const ranks = {
    rankId: userInfo.rank_id,
    highestRankId: userInfo.highestRank
  }


  useEffect(() => {
    const getRankNames = async () => {

      const results = await axios.post(`${API_URL_BASE}/api/rank/getName`, ranks )
      setRankNames(results.data)
    }

    const getReferralInfo = async () => {
     
        const result = await axios.post(`${API_URL_BASE}/apiUser/getUserByUserCode`, {userCode: userInfo.CodeReferenced})
        setReferred(result.data)
    
      
    }

    

    if(userInfo.CodeReferenced !== "")  {
    getReferralInfo()
    }

    getRankNames()
    setIsLoading(false)
  },[])


  const calculate = async () => {
   
    const response = await axios.post(`${API_URL_BASE}/apiUser/calculate`)
  
  }


if (!isLoading) {
  return (
    <div className='container m-auto w-full px-10'>
      <div className='flex flex-row gap-5'>
        <div className=' bg-gray-800 w-3/5' style={{ flex: '1', padding: '20px' }}>
         
          <ReferralTree />
          
        </div>
        <div className='bg-gray-900 w-1/5' style={{ flex: '1', padding: '20px' }}>
         
          <ProfileCard userInfo={userInfo} rankNames={rankNames} referred={referred}  />
        </div>
        <div className='bg-gray-900 w-1/5' style={{ flex: '1', padding: '20px' }}>
          {/* Reduje el ancho del tercer componente a w-1/5 */}
          <ProfileDetail userInfo={userInfo} rankNames={rankNames} token={user.token} />
        </div>
      </div>
    </div>
  )
} else {
  return (
    <p>Cargando</p>
  )
}
  
}

export default ProfileHome;
