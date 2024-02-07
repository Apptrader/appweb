import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/actions';

const PaymentSuccessComponent = () => {
  const navigate = useNavigate();
  const plan = useSelector((state) => state?.plan);
  const token = useSelector((state) => state?.user.token);
  const [isEffectExecuted, setIsEffectExecuted] = useState(false);

  const dispatch = useDispatch()


  useEffect(() => {
    console.log("PaymentSuccessComponent renderizado");

    if (!isEffectExecuted) {
      const updateUser = async () => {
        try {
          const response = await axios.post(
            "http://localhost:4000/apiUser/updateUserPlan",
            { plan },
            {
              headers: {
                'Authorization': `Bearer ${token}`
              },
            }
          );

          if (response.data.updated === "ok") {
            dispatch(setUser(response.data.user[0]))
            
          } else {
            console.log("Not okay");
          }
        } catch (error) {
          console.error("Error updating user plan:", error);
        }
      };

      updateUser();
      setIsEffectExecuted(true);
    }
  }, [isEffectExecuted, plan, token, navigate]);

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
