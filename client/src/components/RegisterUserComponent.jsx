import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import NavbarComponent from './navbarComponent';

const RegisterUserComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        UserName: '',
        Email: '',
        Password: '',
        UserCode: '',
        Phone: '',
        CodeReferenced: '',
        idPaidPlanForUser: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.UserName) {
            errors.UserName = 'User Name is required';
            isValid = false;
        }

        if (!formData.Email) {
            errors.Email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            errors.Email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.Password) {
            errors.Password = 'Password is required';
            isValid = false;
        }

        if (!formData.UserCode) {
            errors.UserCode = 'User Code is required';
            isValid = false;
        }

        if (!formData.Phone) {
            errors.Phone = 'Phone is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                // Realizar la solicitud a tu servidor Node.js
                console.log('Datos del formulario:', formData);
                const response = await axios.post(
                    'http://localhost:4000/apiUser/register',
                    formData,
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // Manejar la respuesta del servidor según sea necesario
                if (response.data.created === 'ok') {
                    dispatch(setUser(response.data));
                    navigate('/home');
                }
            } catch (error) {
                console.error('Error al enviar datos al servidor:', error);
            }
        }
    };

    return (
        <>
        <NavbarComponent />
        <div className="bg-black min-h-screen flex flex-col mt-[-60px]">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-black px-6 py-8 rounded shadow-md  w-full">
                    <img className="mx-auto h-10 w-auto" src="https://static.wixstatic.com/media/39c6da_c313300b528e4aa284d37b4c31f951a8~mv2.png/v1/crop/x_83,y_128,w_336,h_226/fill/w_154,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design.png" alt="Your Company" />
                    <h1 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="UserName"
                                className="block font-bold leading-6 text-white mt-4"
                            >
                                User Name
                            </label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className={`pl-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 bg-gray-700 ${errors.UserName ? 'border-red-500' : ''
                                    }`}
                                name="UserName"
                                placeholder=""
                            />
                            {errors.UserName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.UserName}
                                </p>
                            )}
                        </div>
                        <div>
                        <label htmlFor="email" className="block  font-bold leading-6 text-white mt-4">Email</label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            className=" pl-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 bg-gray-700"
                            name="Email"
                            placeholder="" />
                        {errors.Email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.Email}
                                </p>
                            )}

                        </div>
                        <div>
                        <label htmlFor="Password" className="block  font-bold leading-6 text-white mt-4">Password</label>
                        <input
                            onChange={handleInputChange}
                            type="password"
                            className=" pl-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 bg-gray-700"
                            name="Password"
                            placeholder="" />
                            {errors.Password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.Password}
                                </p>
                            )}
                        </div>
                       <div>
                       <label htmlFor="Password" className="block  font-bold leading-6 text-white mt-4">Confirm Password</label>
                        <input
                            onChange={handleInputChange}
                            type="password"
                            className=" pl-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 bg-gray-700"
                            name="Password"
                            placeholder="" />
                            {errors.Password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.Password}
                                </p>
                            )}
                       </div>
                        {/* <input 
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                            name="confirm_password"
                            placeholder="Confirm Password" /> */}

                       <div>
                       <label htmlFor="Phone" className="block  font-bold leading-6 text-white mt-4">Phone</label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            className=" pl-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 bg-gray-700"
                            name="Phone"
                            placeholder="" />
                            {errors.Phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.Phone}
                                </p>
                            )}
                       </div>

                        <button
                            type="submit"
                            className="mt-6 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 font-bold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-white mt-4 font-bold">
                        By signing up, you agree to the
                        <a className="ml-2 no-underline border-b border-grey-dark text-gray-500" href="#">
                            Terms of Service
                        </a> and
                        <a className=" ml-2 no-underline border-b border-grey-dark text-gray-500" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className=" text-white font-bold mt-6">
                    Already have an account?
                    <a className="pl-2 font-bold leading-6 text-blue-400 hover:text-blue-300" href="/loginUser">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        </>
    )
}

export default RegisterUserComponent