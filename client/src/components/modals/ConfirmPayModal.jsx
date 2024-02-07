import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPlan } from '../../redux/actions';

const ConfirmPayModal = ({ prod, setShowConfirmPayModal }) => {
  const { name, details } = prod;
  const [newPlan, setNewPlan] = useState({
      referred: "",
      id: prod.details.id,
      name: prod.name,
      price: prod.details.price
  });
  
  const dispatch = useDispatch()

  const fetchSessionUrl = async () => {

    dispatch(setPlan(newPlan))

    try {
      
      const response = await axios.post('http://localhost:4000/api/payment/checkout', {
        product: details,
        name,
      });

      console.log(response.data)

      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error fetching payment session URL', error.message);
      
    }
  };

  const handleReferralCodeChange = (event) => {
    const { value } = event.target;
  
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      referred: value,
    }));
  };

  

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black" style={{ background: "rgba(0, 0, 0, 0.70)" }}>
      <div className="modal-content bg-gray-800 text-white font-bold p-6 rounded-md shadow-md max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Selected Plan: {name}</h2>
          <button onClick={() => setShowConfirmPayModal(false)} className="text-gray-300 hover:text-gray-100 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <p className="text-lg mb-2">Amount: ${details.price}</p>
        <div className="mt-4">
          <label htmlFor="referralCode" className="block text-sm font-medium text-gray-300 mb-1">Referral Code:</label>
          <input
            type="text"
            id="referralCode"
            name="referralCode"
            value={newPlan.referred}
            onChange={handleReferralCodeChange}
            className="p-2 border rounded-md w-full bg-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => fetchSessionUrl()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          >
            Go to pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayModal;