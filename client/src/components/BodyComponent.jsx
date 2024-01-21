import PaidPlansListComponent from '../components/PaidPlansListComponent'

const BodyComponent = () => {
    
    
        
    return(
        <div className=" bg-gray-800 ">
            
            

            <div className="bg-gray-800 p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

                    <div className="flex items-center justify-center h-4096 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <video className="w-full h-full object-cover"  autoPlay loop muted playsInline>
                            <source src="https://video.wixstatic.com/video/a1316e_ea5ee04ee5aa4185ad0a6b2d17d04e64/480p/mp4/file.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    
                    <div className="bg-gray-800  w-full h-full object-cover flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">  
                        <PaidPlansListComponent />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 p-4 bg-gray-800 rounded dark:bg-gray-800">
                        <div className="bg-gray-800 flex flex-col items-center justify-center h-full p-6 bg-gray-50 rounded dark:bg-gray-800">
                            <h1 className="text-5xl text-gray-400 dark:text-gray-500 mb-4">
                                About AIQ Learning
                            </h1>
                            <h4 className="text-2xl text-gray-400 dark:text-gray-500">
                                AIQ is committed to providing valuable and insightful information. Our mission is to empower individuals with knowledge, serving as a trusted publisher in various domains. We prioritize accuracy and aim to foster a learning environment. While we offer information, it's important to note that we do not provide specific advice, especially in financial matters. Our focus is on contributing to your understanding, and we encourage users to exercise their own judgment and seek professional advice when needed.
                            </h4>
                        </div>
                        
                        <div className="bg-gray-800 flex items-center justify-center h-68 bg-gray-50 rounded dark:bg-gray-800">
                            <img className="w-full h-full object-cover rounded" src="https://media.gettyimages.com/id/1401171512/es/foto/rising-stock-market-trading-chart.jpg?s=2048x2048&w=gi&k=20&c=TrxzuWG_PrPjJHdks1nUy88h91bTu9rNxVnpcUAlKJc=" alt="Descripción de la imagen" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 p-4 bg-gray-800 rounded dark:bg-gray-800">
    <div className="bg-gray-800 flex items-center justify-center h-68 bg-gray-50 rounded dark:bg-gray-800">
        <img className="w-full h-full object-cover rounded" src="https://static.wixstatic.com/media/a1316e_a1c7c9e9f742496198740ebb8d23df67~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-03%20at%202_43_edited.jpg" alt="Descripción de la imagen" />
    </div>

    <div className="bg-gray-800 flex flex-col items-center justify-center h-full p-6 bg-gray-50 rounded dark:bg-gray-800">
        <h1 className="text-5xl text-gray-400 dark:text-gray-500 mb-4">
            WHAT SET US APART
        </h1>
        <h4 className="text-2xl text-gray-400 dark:text-gray-500">
            Discover a revolutionary approach to Forex training that sets us apart from the rest. Our comprehensive program combines cutting-edge technology, personalized coaching, and real-world simulations to elevate your trading skills. Benefit from live market analysis, interactive workshops, and a dynamic community, ensuring you gain the confidence and expertise needed to thrive in the ever-changing world of Forex. Join us on a journey where innovation meets education, and success becomes a tangible reality
        </h4>
    </div>
</div>

                    <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    
}

export default BodyComponent