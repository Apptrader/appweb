import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnersComponent = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Tiempo de espera entre cada diapositiva (en milisegundos)
        centerMode: true, // Centro las imágenes
        centerPadding: '0px', // Espacio entre las imágenes
    };

    return (
        <section className="bg-black pt-24 pb-4 shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto md:py-8">
                <div className="flex justify-center ">
                    <h2 className="text-center self-center py-12 text-white text-4xl font-semibold whitespace-nowrap">OUR PARTNERS</h2>
                </div>
                <div className="sm:hidden">
                    <Slider {...settings}>
                        <div className="flex justify-center">
                            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img className="inline-block mx-auto" src="https://static.wixstatic.com/media/a1316e_7d1f68fe88df4ccca8ad83672f893c1d~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_42_19%20PM.png" alt="Flowbite Logo" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img className="inline-block mx-auto" src="https://static.wixstatic.com/media/a1316e_6beac93fb7d24972b9635ca346c83214~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2010_edited.jpg" alt="Flowbite Logo" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img className="inline-block mx-auto" src="https://static.wixstatic.com/media/a1316e_5fab151d4d324373867e46b4ee25747b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_01_32%20PM.png" alt="Flowbite Logo" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img className="inline-block mx-auto" src="https://static.wixstatic.com/media/a1316e_c53c674fa8764e7baaf2c831feab302f~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_27_37%20PM.png" alt="Flowbite Logo" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img className="inline-block mx-auto" src="https://static.wixstatic.com/media/a1316e_1f1331cad8084bfba30c6f7e6a4ce335~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_31_51%20PM.png" alt="Flowbite Logo" />
                            </a>
                        </div>
                    </Slider>
                </div>
                <div className="hidden sm:flex justify-between"> {/* Esta clase mostrará las imágenes estáticamente en dispositivos 'sm' y mayores */}
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className="" src="https://static.wixstatic.com/media/a1316e_7d1f68fe88df4ccca8ad83672f893c1d~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_42_19%20PM.png" alt="Flowbite Logo" />
                    </a>
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className="" src="https://static.wixstatic.com/media/a1316e_6beac93fb7d24972b9635ca346c83214~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2010_edited.jpg" alt="Flowbite Logo" />
                    </a>
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className="" src="https://static.wixstatic.com/media/a1316e_5fab151d4d324373867e46b4ee25747b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_01_32%20PM.png" alt="Flowbite Logo" />
                    </a>
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className="" src="https://static.wixstatic.com/media/a1316e_c53c674fa8764e7baaf2c831feab302f~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_27_37%20PM.png" alt="Flowbite Logo" />
                    </a>
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className="" src="https://static.wixstatic.com/media/a1316e_1f1331cad8084bfba30c6f7e6a4ce335~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_31_51%20PM.png" alt="Flowbite Logo" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersComponent;
