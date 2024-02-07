import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import 'animate.css';
import { ChevronDownIcon, ChevronUpIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import ConfirmPayModal from './modals/ConfirmPayModal';
import FooterComponent from './FooterComponent';
import PartnersComponent from './PartnersComponent';


const PaidPlansListComponent = () => {
  const [plans, setPlans] = useState([]);


  const initialPackageStates = {
    BASIC: { selected: true, details: ['Access to Learning and Training Videos', 'Market BUY&SELL Alerts', 'Forex Daily Alerts'], price: 150, id: 1 },
    PRO: { selected: true, details: ['Access to Learning and Training Videos', 'Market BUY&SELL Alerts', 'Forex Daily Alerts', 'Market Daily Discussions', 'Market Daily Analysis', 'Forex Alerts - VIP', 'Funded Account Challenges'], price: 250, id: 2 },
    SONIC: { selected: true, details: ['Access to Learning and Training Videos', 'Market BUY&SELL Alerts', 'Forex Daily Alerts', 'Market Daily Discussions', 'Market Daily Analysis', 'Forex Alerts - VIP', 'Funded Account Challenges', 'Binary Alerts (10s to 5min alerts)', 'Crypto Alerts (SPOT and FUTURE)', 'NeoTech Robot (is an Artificial intelligence robot that trades on your behalf)'], price: 600, id: 3 },
  };

  const [packageStates, setPackageStates] = useState(initialPackageStates);
  const [showConfirmPayModal, setShowConfirmPayModal] = useState(false)
  const [product, setProduct] = useState({
    name: "",
    details: ""
  })

  const toggleDetails = (packageName) => {
    setPackageStates((prevState) => ({
      ...prevState,
      [packageName]: {
        ...prevState[packageName],
        selected: !prevState[packageName].selected,
      },
    }));
  };

  
  const handlePaymentConfirm = (product, name) => {
    setProduct({
      name: name,
      details: product
    })
    setShowConfirmPayModal(true)
  }


  useEffect(() => {
    axios.get('http://localhost:4000/apiPaidPlans/paidplans')
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const partnerImageClass = 'max-w-[150px]'

  console.log(product, "producto")

  return (
    <div  className='bg-black'>
      <div>
      <NavbarComponent />
      <div className='bg-black px-4 md:px-8 lg:px-16 xl:px-32 font-bold pt-24'>
        <h1 className=' text-center text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6'>Packages</h1>
        <div className='flex flex-col md:flex-row gap-10 mx-auto max-w-7xl justify-center pt-16'>
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
                  <span className='relative z-10'>BUY $150</span>
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
                  <span className='relative z-10'>BUY $600</span>
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
      <PartnersComponent />
      <h1 className='text-center bg-black font-bold text-7xl text-white pt-32'>Choose your package</h1>
      <div className='flex flex-col bg-black text-white font-bold pt-32 items-stretch justify-center sm:flex-row sm:flex-wrap sm:gap-4 md:gap-8 lg:gap-10'>
        
        {Object.keys(initialPackageStates).map((packageName) => (
          <div
            key={packageName}
            className={`flex flex-col items-center justify-between p-4 sm:w-full md:w-[300px] border border-blue-300 hover:border-dashed relative ${packageStates[packageName].selected ? 'selected' : ''}`}
          >
            <div>
              <p className='text-center pb-16'>{packageName}</p>
            </div>

            <div className='flex-1 flex flex-col items-center'>
              <button
                className='mb-2 border border-blue-300 rounded-full px-6 py-1 hover:text-gray-300'
                onClick={() => handlePaymentConfirm(packageStates[packageName], packageName)} // Change here
              >
                Select
              </button>

              {packageStates[packageName].selected ? (
                <ChevronUpIcon
                  onClick={() => toggleDetails(packageName)}
                  className="mb-2 w-6 h-6 text-gray-500 m-auto mt-2"
                />
              ) : (
                <ChevronDownIcon
                  onClick={() => toggleDetails(packageName)}
                  className="mb-2 w-6 h-6 text-gray-500 m-auto mt-2"
                />
              )}

              {/* Render details only if the package is selected */}
            </div>
            {packageStates[packageName].selected && (
              <div key={`${packageName}-details`} className='p-2 border-t border-blue-300 font-bold w-full'>
                {packageStates[packageName].details.map((detail, index) => (
                  <div key={index} className="flex mt-2 p-2">
                    <div>
                      <CheckBadgeIcon className='h-4 w-4 mr-2 text-blue-600' />
                    </div>
                    <div>
                      <p className="text-xs">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <FooterComponent />
      </div>
      {
        showConfirmPayModal && product && (
          <ConfirmPayModal prod={product} setShowConfirmPayModal={setShowConfirmPayModal} />
        )
      }
    </div>
  );
}

export default PaidPlansListComponent;