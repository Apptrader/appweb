import React, { useState } from 'react';
import axios from 'axios';

const RegisterUserComponent =() =>{

    const [formData, setFormData] = useState({
        
        UserName: '',
        Email: '',
        Password:'',
        UserCode:'',
        Phone:'',
        CodeReferenced:'',
        idPaidPlanForUser:'',
    });

    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Realizar la solicitud a tu servidor Node.js
          console.log('Datos del formulario:', formData);
          const response = await axios.post('http://localhost:4000/apiUser/register', formData, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          });
         
        
          // Manejar la respuesta del servidor según sea necesario
          console.log('Respuesta del servidor:', response.data);
        } catch (error) {
          console.error('Error al enviar datos al servidor:', error);
        }
      };

    return (
        
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div  className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="UserName"
                            placeholder="User Name" />

                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Email"
                            placeholder="Email" />

                        <input 
                            onChange={handleInputChange}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Password"
                            placeholder="Password" />
                        {/* <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" /> */}
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="UserCode"
                            placeholder="UserCode" />
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Phone"
                            placeholder="Phone" />
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="CodeReferenced"
                            placeholder="Code Referenced" />
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="idPaidPlanForUser"
                            placeholder="Paid Plan" />

                        <button
                            
                            type="submit"
                            className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    )
}

export default RegisterUserComponent