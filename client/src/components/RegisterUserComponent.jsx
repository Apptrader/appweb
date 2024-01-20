import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

const RegisterUserComponent =() =>{

    const dispatch = useDispatch();

    const navigate = useNavigate();

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
          if (response.data.created == 'ok'){
            dispatch(setUser(response.data));
            navigate('/home');
          }

        } catch (error) {
          console.error('Error al enviar datos al servidor:', error);
        }
      };

    return (
        
        <div className="bg-gray-lighter min-h-screen flex flex-col bg-gray-800">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div  className="bg-gray-800 px-6 py-8 rounded shadow-md  w-full">
                <img className="mx-auto h-10 w-auto" src="https://static.wixstatic.com/media/39c6da_c313300b528e4aa284d37b4c31f951a8~mv2.png/v1/crop/x_83,y_128,w_336,h_226/fill/w_154,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design.png" alt="Your Company"/>
                    <h1 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">User Name</label>
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="UserName"
                            placeholder="" />
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">Email</label>
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="Email"
                            placeholder="" />

                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">Password</label>
                        <input 
                            onChange={handleInputChange}
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="Password"
                            placeholder="" />
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">Confirm Password</label>
                        <input 
                            onChange={handleInputChange}
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="Password"
                            placeholder="" />
                        {/* <input 
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="confirm_password"
                            placeholder="Confirm Password" /> */}
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">User Code</label>
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="UserCode"
                            placeholder="" />
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">Phone</label>
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="Phone"
                            placeholder="" />
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">Code Referenced</label>
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="CodeReferenced"
                            placeholder="" />
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white mt-4">Paid Plan</label>
                        <input 
                            onChange={handleInputChange}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="idPaidPlanForUser"
                            placeholder="" />

                        <button
                            
                            type="submit"
                            className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-gray-500 mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-gray-500" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-gray-500" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className=" text-gray-500  mt-6">
                    Already have an account? 
                    <a className= " font-semibold leading-6 text-indigo-600 hover:text-indigo-500" href="../login/">
                         Log in
                    </a>.
                </div>
            </div>
        </div>
    )
}

export default RegisterUserComponent