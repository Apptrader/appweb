import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPlan } from '../../redux/actions';
import getParamsEnv from '../../functions/getParamsEnv';
import { CardElement } from '@stripe/react-stripe-js';




const { API_URL_BASE, VITE_TERMS_AND_CONDITION } = getParamsEnv();


const ForgotPasswordModal = ({ onSubmit, setShowForgotPasswordModal }) => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email);
      };
    
      const handleClose = () => {
        setEmail(''); // Reset email state when modal is closed
        setShowForgotPasswordModal(false)
   
      };



    return (
        <>
            <div className="fixed z-20 top-0 left-0 flex items-center justify-center w-full h-full bg-black" style={{ background: "rgba(0, 0, 0, 0.70)" }}>
                <div className="modal-content bg-gray-800 text-white font-bold p-6 rounded-md shadow-md max-w-md w-full">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="border-gray-300 border w-full px-3 py-2 rounded-md"
                                    required
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    type="button"
                                    onClick={handleClose} // Change onClick to handleClose
                                    className="text-gray-600 mr-2 focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ForgotPasswordModal;

