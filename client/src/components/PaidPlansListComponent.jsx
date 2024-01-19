import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaidPlansListComponent = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API
    axios.get('http://localhost:4000/apiPaidPlans/paidplans')
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setPlans(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El segundo parámetro [] significa que este efecto se ejecutará solo una vez al montar el componente

  return (
    <div className='bg-gray-800'>
      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            {/* Tu código para el encabezado */}
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {plans.map(plan => (
              <div key={plan.id} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-500 rounded-lg   shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-white text-2xl font-semibold">{plan.planName}</h3>
                <p className="font-light text-white sm:text-lg dark:text-gray-400">{plan.description}</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-white text-5xl font-extrabold">{plan.planCost}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  {/* Agregar elementos de la lista según las propiedades del plan */}
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className='text-white'>{plan.feature}</span>
                  </li>
                  {/* Agregar más elementos según las propiedades del plan */}
                </ul>
                <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaidPlansListComponent;
