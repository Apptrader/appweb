import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import 'animate.css';

const PaidPlansListComponent = () => {
  const [plans, setPlans] = useState([]);

  const partnerImageClass = 'max-w-[150px]'

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
    <>
      <NavbarComponent />
      <div className='bg-black px-4 md:px-8 lg:px-16 xl:px-32 font-bold pt-24'>
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6'>Packages</h1>
        <div className='flex flex-col md:flex-row gap-10 mx-auto max-w-7xl justify-center items-center pt-16'>
          {/* Package 1 */}
          <div className="flex items-center flex-col max-w-full md:max-w-[280px] gap-5">
            <img className='animate__animated animate__fadeInLeft' src="https://res.cloudinary.com/doqyrz0sg/image/upload/v1706129388/aiqplan1_b5df6y.webp" alt="img 1" />
            <div className="flex flex-col ml-5 text-center">
              <h2 className="text-white text-2xl md:text-3xl p-3">BASIC Benefits</h2>
              <div className='px-4'>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Access to Learning and Training Videos
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Market BUY&SELL Alerts
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Forex Daily Alerts
                </p>
                <button className='relative ml-auto bg-[#8c8Ac1] p-2 px-6 md:px-10 text-white overflow-hidden group'>
                  <span className='relative z-10'>BUY $250</span>
                  <span className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <img src='https://i.pinimg.com/originals/31/fb/7b/31fb7b6c808cb6d714a0e303c5a4119b.jpg' alt='Fondo al hacer hover' className='w-full h-full' />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Package 2 */}
          <div className="flex items-center flex-col max-w-full md:max-w-[280px] font-bold">
            <img className='animate__animated animate__fadeInLeft' src="https://res.cloudinary.com/doqyrz0sg/image/upload/v1706129395/aiqplan2_nexhqu.webp" alt="img 1" />
            <div className="flex flex-col ml-5 text-center">
              <h2 className="text-white text-2xl md:text-3xl p-3">PRO Benefits</h2>
              <div className='px-4'>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Access to Learning and Training Videos
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Market BUY&SELL Alerts
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Forex Daily Alerts
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Market Daily Discussions
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Market Daily Analysis
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Forex Alerts - VIP
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Funded Account Challenges
                </p>
                <button className='relative ml-auto bg-[#0088a3] p-2 px-6 md:px-10 text-white overflow-hidden group'>
                  <span className='relative z-10'>BUY $250</span>
                  <span className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <img src='https://i.pinimg.com/originals/31/fb/7b/31fb7b6c808cb6d714a0e303c5a4119b.jpg' alt='Fondo al hacer hover' className='w-full h-full' />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Package 3 */}
          <div className="flex items-center flex-col max-w-full md:max-w-[280px]">
            <img className='animate__animated animate__fadeInLeft' src="https://res.cloudinary.com/doqyrz0sg/image/upload/v1706129401/aiqplan3_k64hky.webp" alt="img 1" />
            <div className="flex flex-col ml-5 text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold p-3">SONIC Benefits</h2>
              <div className='px-4 font-bold'>
                <p className="text-white font-bold mb-2">
                  <span className="bullet font-bold">&#8226;</span> Access to Learning and Training Videos
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Market BUY&SELL Alerts
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Forex Daily Alerts
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Market Daily Discussions
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Market Daily Analysis
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Forex Alerts - VIP
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Funded Account Challenges
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Binary Alerts (10s to 5min alerts)
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> Crypto Alerts (SPOT and FUTURE)
                </p>
                <p className="text-white mb-2">
                  <span className="bullet">&#8226;</span> NeoTech Robot (is an Artificial intelligence robot that trades on your behalf)
                </p>
                <button className='relative ml-auto bg-[#013366] p-2 px-6 md:px-10 text-white overflow-hidden group'>
                  <span className='relative z-10'>BUY $250</span>
                  <span className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <img src='https://i.pinimg.com/originals/31/fb/7b/31fb7b6c808cb6d714a0e303c5a4119b.jpg' alt='Fondo al hacer hover' className='w-full h-full' />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row bg-black text-white font-bold xs:pt-[100px] md:pt-20 lg:pt-24 xl:pt-32 pb-16 md:pb-20 lg:pb-24 xl:pb-[250px] px-4 md:px-8 lg:px-16 xl:px-32 xl:pt-[250px]'>
        <div className='flex-1 m-auto  md:text-left'>
          <h1 className='text-5xl md:text-7xl text-center'>50% off</h1>
        </div>
        <div className='flex-1 mt-6 md:mt-0'>
          <p className='pb-6 md:pb-10'>AIQ offers 50% off on the BASIC package for clients who live in these countries.</p>
          <p className='pb-6 md:pb-10'>Algeria, Argentina, Azerbaijan, Bangladesh, Bolivia, Brazil, Chile, China, Colombia, Costa Rica, Cuba, Djibouti, Ecuador, Egypt, Ethiopia, Georgia, India, Indonesia, Iran, Jamaica, Jordan, Lebanon, Libya, Mexico, Morocco, Panama, Pakistan, Palestine, Paraguay, Senegal, Somalia, Sudan, Syria, Thailand, Tunisia, Uruguay, Uzbekistan, Venezuela, Yemen, Zambia.</p>
          <p>You have to submit proof of address to be eligible for this discount.</p>
        </div>
      </div>
      <div className='bg-black text-white font-bold text-center text-3xl'>
        <div className='p-5 md:p-10'>
          <p>OUR PARTNERS</p>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4 md:items-center md:justify-center'>
          <img
            src='https://res.cloudinary.com/doqyrz0sg/image/upload/v1706138824/partnet1_dakluu.webp'
            className={`w-full xs:w-1/2 sm:w-1/3 md:w-1/2 h-32 md:h-auto mb-4 md:mb-0 ${partnerImageClass}`}
            alt='Partner 1'
          />
          <img
            src='https://res.cloudinary.com/doqyrz0sg/image/upload/v1706138831/partnet2_iekf6x.webp'
            className={`w-full xs:w-1/2 sm:w-1/3 md:w-1/2 h-32 md:h-auto mb-4 md:mb-0 ${partnerImageClass}`}
            alt='Partner 2'
          />
          <img
            src='https://res.cloudinary.com/doqyrz0sg/image/upload/v1706138838/partne3_x2utb4.webp'
            className={`w-full xs:w-1/2 sm:w-1/3 md:w-1/2 h-32 md:h-auto mb-4 md:mb-0 ${partnerImageClass}`}
            alt='Partner 3'
          />
          <img
            src='https://res.cloudinary.com/doqyrz0sg/image/upload/v1706138845/partner4_ct0wjl.webp'
            className={`w-full xs:w-1/2 sm:w-1/3 md:w-1/2 h-32 md:h-auto mb-4 md:mb-0 ${partnerImageClass}`}
            alt='Partner 4'
          />
          <img
            src='https://res.cloudinary.com/doqyrz0sg/image/upload/v1706138851/partnet5_q00hbm.webp'
            className={`w-full xs:w-1/2 sm:w-1/3 md:w-1/2 h-32 md:h-auto mb-4 md:mb-0 ${partnerImageClass}`}
            alt='Partner 5'
          />
        </div>
      </div>
    </>
  );
}

export default PaidPlansListComponent;