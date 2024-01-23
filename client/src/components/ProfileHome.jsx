import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from 'react-redux';
import ReferralTree from "./ReferralTree";
import axios from "axios";

const ProfileHome = () => {
  const user = useSelector((state)=> state?.user);
  const [countLeftLeg, setCountLeftLeg] = useState(0);
  const [countRightLeg, setCountRightLeg] = useState(0);
  const targetNumber = 2500; // Puedes ajustar este número según tus necesidades
  const [referralTree, setReferralTree] = useState(null)
  console.log(user.token)

  useEffect(() => {
    const intervalLeftLeg = setInterval(() => {
      setCountLeftLeg((prevCount) => prevCount + 1);
    }, 0.05); // Ajusta el intervalo según tus necesidades

    const intervalRightLeg = setInterval(() => {
      setCountRightLeg((prevCount) => prevCount + 1);
    }, 0.1); // Ajusta el intervalo según tus necesidades

    // Detener la cuenta cuando alcance el número deseado
    if (countLeftLeg >= targetNumber) {
      clearInterval(intervalLeftLeg);
    }

    if (countRightLeg >= targetNumber) {
      clearInterval(intervalRightLeg);
    }

    // Limpiar intervalos al desmontar el componente
    return () => {
      clearInterval(intervalLeftLeg);
      clearInterval(intervalRightLeg);
    };
  }, [countLeftLeg, countRightLeg, targetNumber]);

  useEffect(() => {
    const fetchTreeData = async () => {
      try {
        const tree = await axios.get('http://localhost:4000/apiUser/referralTree', {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });

        console.log(tree.data.referralTree)
        setReferralTree(tree.data.referralTree);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchTreeData();
  }, [user.token])

  console.log(referralTree)

  return (
    <div className='container bg-gray-800'>
      <div className='flex flex-row p-20 gap-5'>
        <div className='bg-gray-900' style={{ flex: '2' }}>
          <ProfileCard user={user} />
        </div>
        <div className='bg-gradient-to-br from-gray-700 to-black text-white flex flex-col justify-center items-center' style={{ flex: '1' }}>
          <h3 className="text-white text-lg mb-2">leftLeg</h3>
          <p className="text-white text-3xl">{countLeftLeg}</p>
        </div>
        <div className='bg-gradient-to-br from-gray-700 to-black text-white flex flex-col justify-center items-center' style={{ flex: '1' }}>
          <h3 className="text-white text-lg mb-2">rightLeg</h3>
          <p className="text-white text-3xl">{countRightLeg}</p>
        </div>
      </div>
      <div className='mt-5 p-5'>
        <h2 className="text-white text-2xl mb-2">Árbol de Referidos</h2>
        <ReferralTree treeData={referralTree} />
      </div>
    </div>
  );
}

export default ProfileHome;
