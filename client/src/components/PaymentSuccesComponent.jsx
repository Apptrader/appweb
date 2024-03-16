import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/actions';
import getParamsEnv from '../functions/getParamsEnv';

const {API_URL_BASE} = getParamsEnv()

const PaymentSuccessComponent = () => {
  const navigate = useNavigate();
  const plan = useSelector((state) => state?.plan);
  const token = useSelector((state) => state?.user.token);
  const [isEffectExecuted, setIsEffectExecuted] = useState(false);

  const dispatch = useDispatch()


  useEffect(() => {
    console.log("PaymentSuccessComponent renderizado");

   
      const updateUser = async () => {
        try {
          const response = await axios.post(
            `${API_URL_BASE}/apiUser/updateUserPlan`,
            { plan },
            {
              headers: {
                'Authorization': `Bearer ${token}`
              },
            }
          );

          console.log(response.data, "en paid")

          if (response.data.updated === "ok") {
            console.log("okey")
            const updateUser = {
                token: token,
                userFound: response.data.userFound
              
            }
            dispatch(setUser(updateUser))
            
          } else {
            console.log("Not okay");
          }
        } catch (error) {
          console.error("Error updating user plan:", error);
        }
      }

      updateUser();
    
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
          <p className="text-4xl font-bold mb-4">The payment was successful.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessComponent;
