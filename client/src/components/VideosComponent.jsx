import ReactPlayer from 'react-player';
import FooterComponent from './FooterComponent';
import PartnersComponent from './PartnersComponent';
import NavbarComponent from './NavbarComponent';

const VideosComponent = () => {



    return (
        <div className=" bg-black  ">


            <NavbarComponent/>
            <div className="mt-36 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-8xl font-bold text-white mb-8">Training Videos</h1>
                
                <p className="text-2xl text-gray-400 dark:text-gray-500 mt-12">
                Welcome to our Forex Training Videos page – your go-to resource for mastering currency trading! Dive into expert-led tutorials covering everything from basic principles to advanced strategies. Whether you're a beginner or seasoned trader, our concise and engaging videos empower you with the knowledge to navigate the Forex market confidently. Start your journey to financial success now!
                </p>
                
            </div>
        
            <PartnersComponent/>
            <FooterComponent/>

        </div>
    )

}

export default VideosComponent