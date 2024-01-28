import ReactPlayer from 'react-player';
import FooterComponent from './FooterComponent';
import PartnersComponent from './PartnersComponent';

const BodyComponent = () => {



    return (
        <div className=" bg-black  ">



            <div className="">
                <div className="p-4  rounded-lg dark:border-gray-700">

                    <div className="relative h-4096 mb-4 rounded bg-gray-50 dark:">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                            <source src="https://video.wixstatic.com/video/a1316e_ea5ee04ee5aa4185ad0a6b2d17d04e64/480p/mp4/file.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="mt-36 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-8xl font-bold text-white mb-8">Welcome to AIQ Learning!</h1>
                            <p className="text-4xl text-gray-300 mb-8">Empowering you with valuable knowledge.</p>
                            <p className="text-2xl text-gray-400 dark:text-gray-500 mt-12">
                                Join a trading community where you can be part of a club of like-minded traders, a team of players navigating the markets, or a global community of artists in finance. Spend time with fellow traders, discuss daily market movements, and make learning and having fun a seamless experience.
                            </p>
                            <div className="flex flex-row items-center justify-center mt-12"> {/* Contenedor para los botones con ajuste de top */}
                                <button className="bg-blue-500 text-white px-24 py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4">
                                    Login
                                </button>
                                <button className="bg-green-500 text-white px-24 py-3 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-4096 mb-4 rounded bg-black ml-[700px]">
                    <ReactPlayer
                    
                        url="https://res.cloudinary.com/dqtm0nme2/video/upload/v1706318219/1_ouod0y.mp4"
                        width="50%"
                        height="50%"
                        controls={true} // Agregar el atributo controls para mostrar la interfaz de reproducción
                        playsinline={true}
                    />
                    {/* Resto del contenido */}
                </div>
                    <div className='flex flex-col md:flex-row gap-10 mx-auto max-w-7xl justify-center pt-64'>
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




                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 py-64 px-40  rounded dark:">
                        <div className="bg-black flex flex-col items-center justify-center h-full p-6  rounded dark:">
                            <h1 className="text-5xl text-gray-400 dark:text-gray-500 mb-4 ">
                                About AIQ Learning
                            </h1>
                            <h4 className="text-2xl text-gray-400 dark:text-gray-500">
                                AIQ is committed to providing valuable and insightful information. Our mission is to empower individuals with knowledge, serving as a trusted publisher in various domains. We prioritize accuracy and aim to foster a learning environment. While we offer information, it's important to note that we do not provide specific advice, especially in financial matters. Our focus is on contributing to your understanding, and we encourage users to exercise their own judgment and seek professional advice when needed.
                            </h4>
                        </div>

                        <div className=" flex items-center justify-center h-68 bg-black rounded dark:">
                            <img className="w-[500px] h-[500px] rounded" src="https://media.gettyimages.com/id/1401171512/es/foto/rising-stock-market-trading-chart.jpg?s=2048x2048&w=gi&k=20&c=TrxzuWG_PrPjJHdks1nUy88h91bTu9rNxVnpcUAlKJc=" alt="Descripción de la imagen" />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 p-4  rounded dark:">
                        <div className=" flex items-center justify-center h-68 bg-black rounded dark:">
                            <img className="w-[500px] h-[500px] rounded" src="https://static.wixstatic.com/media/a1316e_a1c7c9e9f742496198740ebb8d23df67~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-03%20at%202_43_edited.jpg" alt="Descripción de la imagen" />
                        </div>

                        <div className=" flex flex-col items-center justify-center h-full p-6 bg-black rounded dark:">
                            <h1 className="text-5xl text-gray-400 dark:text-gray-500 mb-4">
                                WHAT SET US APART
                            </h1>
                            <h4 className="text-2xl text-gray-400 dark:text-gray-500">
                                Discover a revolutionary approach to Forex training that sets us apart from the rest. Our comprehensive program combines cutting-edge technology, personalized coaching, and real-world simulations to elevate your trading skills. Benefit from live market analysis, interactive workshops, and a dynamic community, ensuring you gain the confidence and expertise needed to thrive in the ever-changing world of Forex. Join us on a journey where innovation meets education, and success becomes a tangible reality
                            </h4>
                        </div>
                    </div>
                    <div className=" ">
                        <PartnersComponent/>
                    </div>
                    <div className=" ">
                        <FooterComponent/>
                    </div>




                </div>
            </div>

        </div>
    )

}

export default BodyComponent