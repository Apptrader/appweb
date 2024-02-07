import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor.
    console.log('Form data submitted:', formData);

    try {
      // Realizar la solicitud a tu servidor Node.js
      console.log('Datos del formulario:', formData);
      const response = await axios.post(
        'http://localhost:4000/apiContact/contact',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
          },
        }
      );
      

      console.log('Respuesta del servidor:', response.data);
      /* setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }); */
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  };

  return (
    <form className='flex flex-col items-center w-full max-w-4xl mx-auto' onSubmit={handleSubmit}>
      <div className='flex mb-4 justify-around w-full'>
        <div className='flex flex-col mr-4 w-full'>
          <label htmlFor="firstName" className='mb-2 text-white font-bold'>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=""
            value={formData.firstName}
            onChange={handleChange}
            className='p-2 border rounded-md w-full text-black font-bold'
          />
        </div>

        <div className='flex flex-col mr-4 w-full'>
          <label htmlFor="lastName" className='mb-2 text-white font-bold'>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=""
            value={formData.lastName}
            onChange={handleChange}
            className='p-2 border rounded-md w-full text-black font-bold'
          />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="email" className='mb-2 text-white font-bold'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            className='p-2 border rounded-md w-full text-black font-bold'
            required
          />
        </div>
      </div>

      <div className='flex flex-col mb-4 w-full'>
        <label htmlFor="message" className='mb-2 text-white font-bold'>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder=""
          value={formData.message}
          onChange={handleChange}
          className='p-2 border rounded-md w-full text-black font-bold'
        />
      </div>

      <div className='ml-[75%]'>
        <button type="submit" className='bg-blue-500 px-20 text-white p-2 rounded-md text-black font-bold'>
          Send
        </button>
        <div>
          <p className='p-2  w-full h-full text-white font-bold'>
            Thanks for submitting!
          </p>
        </div>
      </div>

      

      {/* Gracias por enviar */}
      
    </form>
  );
};

export default ContactForm;
