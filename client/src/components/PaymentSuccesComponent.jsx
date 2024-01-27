import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import { useSelector } from 'react-redux';
import axios from 'axios';

const PaymentSuccessComponent = () => {
  const navigate = useNavigate();
  const plan = useSelector((state) => state?.plan)
  const token = useSelector((state) => state?.user.token)

  console.log(plan)
  console.log(token, "token")

  useEffect(() => {
    console.log("corriendo")
    const updateUser = async () => {
      const response = await axios.post(
        "http://localhost:4000/apiUser/updateUserPlan",
        { plan },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }
      );
      console.log(response)
/* 
      if(response.updated === "ok") {
        navigate("/home")
      } else {
        console.log("not okey")
      } */
    }

    updateUser()
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="flex bg-black items-center justify-center h-screen text-white font-bold">
        <div className="bg-black p-8 rounded-lg shadow-lg border border-blue-500 text-center mb-auto">
          <img
            src="https://res.cloudinary.com/doqyrz0sg/image/upload/v1706298897/tickVerde_g2wk3p.png"
            alt="Imagen de éxito"
            className="mb-4 h-14 w-14"
          />
          <p className="text-4xl font-bold mb-4">El pago fue exitoso</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessComponent;