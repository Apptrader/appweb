import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";


import axios from "axios";
import NodeProfileDetail from "./NodeProfileDetail";

const NodeProfileHome = ({user}) => {
  
  const [rankNames, setRankNames] = useState({
    rankId: "",
    highestRankId: ""
  })

  const [isLoading, setIsLoading] = useState(true)

 


  const userInfo = user
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
    <div className='container m-auto w-full px-[200px]'>
      <button onClick={calculate} className="text-white font-bold p-5 rounded-full">Calculate</button>
      <div className='flex flex-row gap-5'>
        <div className='bg-gray-900 w-1/5' style={{ flex: '1', padding: '20px' }}>
         
          <ProfileCard userInfo={userInfo} rankNames={rankNames} referred={referred}  />
        </div>
        <div className='bg-gray-900 w-1/5' style={{ flex: '1', padding: '20px' }}>
          {/* Reduje el ancho del tercer componente a w-1/5 */}
          <NodeProfileDetail userInfo={userInfo} rankNames={rankNames} />
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

export default NodeProfileHome;
