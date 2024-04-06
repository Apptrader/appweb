import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import 'animate.css';
import { ChevronDownIcon, ChevronUpIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import ConfirmPayModal from './modals/ConfirmPayModal';
import FooterComponent from './FooterComponent';
import PartnersComponent from './PartnersComponent';
import getParamsEnv from '../functions/getParamsEnv';
import ConfirmSubscriptionModal from './modals/ConfirmSuscriptionModal';

const { API_URL_BASE } = getParamsEnv()


const PaidPlansListComponent = () => {
  const [plans, setPlans] = useState([]);


  const initialPackageStates = {
    BASIC: { selected: true, details: ['Access to Learning and Training Videos', 'Market BUY&SELL Alerts', 'Forex Daily Alerts'], price: 150, id: 1, bonus: 30, renewal: 60 },
    PRO: { selected: true, details: ['Access to Learning and Training Videos', 'Market BUY&SELL Alerts', 'Forex Daily Alerts', 'Market Daily Discussions', 'Market Daily Analysis', 'Forex Alerts - VIP', 'Funded Account Challenges'], price: 250, id: 2, bonus: 75, renewal: 85 },
    SONIC: { selected: true, details: ['Access to Learning and Training Videos', 'Market BUY&SELL Alerts', 'Forex Daily Alerts', 'Market Daily Discussions', 'Market Daily Analysis', 'Forex Alerts - VIP', 'Funded Account Challenges', 'Binary Alerts (10s to 5min alerts)', 'Crypto Alerts (SPOT and FUTURE)', 'NeoTech Robot (is an Artificial intelligence robot that trades on your behalf)'], price: 600, id: 3, bonus: 150, renewal: 90 },
  };

  const [packageStates, setPackageStates] = useState(initialPackageStates);
  const [showConfirmPayModal, setShowConfirmPayModal] = useState(false)
  const [showConfirmSubModal, setShowConfirmSubModal] = useState(false)
  const [product, setProduct] = useState({
    name: "",
    details: ""
  })

  const [subscription, setSubscription] = useState({
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


  const handlePaymentConfirm1 = (product, name) => {
    setProduct({
      name: "Basic",
      details: { price: 150, id: 1, bonus: 35, renewal: 60 }
    })
    setShowConfirmSubModal(true)
  }

  const handlePaymentConfirm2 = (product, name) => {
    setSubscription({
      name: "Pro",
      details: { price: 250, id: 2, bonus: 60, renewal: 85 }
    })
    setShowConfirmPayModal(true)

  }

  const handlePaymentConfirm3 = (product, name) => {
    setProduct({
      name: "Sonic",
      details: { price: 600, id: 3, bonus: 150, renewal: 90 }
    })
    setShowConfirmPayModal(true)
  }

  const handlePaymentConfirm = (product, name) => {
    setProduct({
      name: name,
      details: product
    })
    setShowConfirmPayModal(true)
  }



  useEffect(() => {
    axios.get(`${API_URL_BASE}/apiPaidPlans/paidplans`)
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const partnerImageClass = 'max-w-[150px]'

  console.log(product, "producto")

  const handleSubConfirm1 = (product, name) => {
    setSubscription({
      name: "Basic",
      details: { price: "price_1P2OPtIrqUJwwaEOLbuwHhRQ", price2: 60 }
    })
    setShowConfirmSubModal(true)
  }

  const handleSubConfirm2 = (product, name) => {
    setSubscription({
      name: "Pro",
      details: { price: "price_1P2MPqCtqRjqS5chqiRgs0jA", price2: 85 }
    })
    setShowConfirmSubModal(true)
  }

  const handleSubConfirm3 = (product, name) => {
    setProduct({
      name: "Sonic",
      details: { price: "price_1P2MQQCtqRjqS5chcgCR4WJ2", price2: 90 }
    })
    setShowConfirmSubModal(true)
  }

  return (
    <div className='bg-black'>
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
                  <button onClick={handlePaymentConfirm1} className='relative ml-auto bg-[#8c8Ac1] p-2 px-6 md:px-10 text-white overflow-hidden group'>
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
                  <button onClick={handlePaymentConfirm2} className='relative ml-auto bg-[#0088a3] p-2 px-6 md:px-10 text-white overflow-hidden group'>
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
                  <button onClick={handlePaymentConfirm3} className='relative ml-auto bg-[#013366] p-2 px-6 md:px-10 text-white overflow-hidden group'>
                    <span className='relative z-10'>BUY $600</span>
                    <span className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <img src='https://i.pinimg.com/originals/31/fb/7b/31fb7b6c808cb6d714a0e303c5a4119b.jpg' alt='Fondo al hacer hover' className='w-full h-full' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto">

            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3 m-auto pt-10">
          {/* Tarjeta Subscription Basic */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-white text-xl font-bold mb-4">Only Subscription Basic</h2>
            <button onClick={handleSubConfirm1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Subscription
            </button>
          </div>
          {/* Tarjeta Subscription Pro */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-white text-xl font-bold mb-4">Only Subscription Pro</h2>
            <button onClick={handleSubConfirm2} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Subscription
            </button>
          </div>
          {/* Tarjeta Subscription Sonic */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-white text-xl font-bold mb-4">Only Subscription Sonic</h2>
            <button onClick={handleSubConfirm3} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Subscription
            </button>
          </div>
        </div>
        <PartnersComponent />

        <FooterComponent />
      </div>
      {
        showConfirmPayModal && product && (
          <ConfirmPayModal prod={product} setShowConfirmPayModal={setShowConfirmPayModal} />
        )
      }
      {
        showConfirmSubModal && subscription && (
          <ConfirmSubscriptionModal prod={subscription} setShowConfirmPayModal={setShowConfirmPayModal} />
        )
      }
      ConfirmPayModal
    </div>
  );
}

export default PaidPlansListComponent;