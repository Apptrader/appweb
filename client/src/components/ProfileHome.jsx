import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from 'react-redux';
import ProfileDetail from "./ProfileDetail";
import ReferralTree from "./ReferralTree";
import axios from "axios";

const ProfileHome = () => {
  const user = useSelector((state) => state?.user);
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

      const results = await axios.post("http://localhost:4000/api/rank/getName", ranks )
      setRankNames(results.data)
    }

    const getReferralInfo = async () => {
     
        const result = await axios.post("http://localhost:4000/apiUser/getUserByUserCode", {userCode: userInfo.CodeReferenced})
        setReferred(result.data)
    
      
    }

    

    if(userInfo.CodeReferenced !== "")  {
    getReferralInfo()
    }

    getRankNames()
    setIsLoading(false)
  },[])


  const calculate = async () => {
   
    const response = await axios.post("http://localhost:4000/apiUser/calculate")
  
  }


if (!isLoading) {
  return (
    <div className='container m-auto'>
      <button onClick={calculate} className="text-white font-bold p-5 rounded-full">Calculate</button>
      <div className='flex flex-row gap-5 p-20'>
        <div className='bg-gray-900 w-3/5' style={{ flex: '1', padding: '20px' }}>
          {/* Amplié el ancho del primer componente a w-3/5 */}
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
