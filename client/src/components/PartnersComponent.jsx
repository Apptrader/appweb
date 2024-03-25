import { Carousel, IconButton } from "@material-tailwind/react";

import React, { useState } from 'react'; // Importa useState desde React

const PartnersComponent = () => {

    
    
    // Lista de imágenes para mostrar en el carousel
    const images = [
        "https://static.wixstatic.com/media/a1316e_7d1f68fe88df4ccca8ad83672f893c1d~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_42_19%20PM.png",
        "https://static.wixstatic.com/media/a1316e_6beac93fb7d24972b9635ca346c83214~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2010_edited.jpg",
        "https://static.wixstatic.com/media/a1316e_5fab151d4d324373867e46b4ee25747b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_01_32%20PM.png",
        "https://static.wixstatic.com/media/a1316e_c53c674fa8764e7baaf2c831feab302f~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_27_37%20PM.png",
        "https://static.wixstatic.com/media/a1316e_1f1331cad8084bfba30c6f7e6a4ce335~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202024-01-05%20at%2011_31_51%20PM.png"
    ];



    // Determinar si mostrar el Carousel o el section según el ancho de la pantalla
    const renderComponent = (
        <>

            
        <section className="bg-black pt-24 pb-4 shadow dark:bg-gray-900 m-4 sm:visible"> {/* Aplicar solo en pantallas grandes */}
            <div className="w-full max-w-screen-xl mx-auto md:py-8">
                <div className="flex justify-center">
                    <h2 className="text-center self-center py-12 text-white text-4xl font-semibold whitespace-nowrap hidden md:block">OUR PARTNERS</h2>
                </div>
                <div className="flex flex-wrap justify-center"> {/* Utilizamos flex-wrap para que los elementos se envuelvan en pantallas más pequeñas */}
                    {images.map((image, index) => (
                        <a key={index} href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img className="" src={image} alt={`Flowbite Logo ${index}`} />
                        </a>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-black pt-24 pb-4 shadow dark:bg-gray-900 m-4 md:block"> {/* Aplicar solo en pantallas grandes */}
            <div className="w-full max-w-screen-xl mx-auto md:py-8">
                <div className="flex justify-center">
                    <h2 className="text-center self-center py-12 text-white text-4xl font-semibold whitespace-nowrap hidden md:block">OUR PARTNERS</h2>
                </div>
                <div className="hidden sm:flex sm:items-center sm:justify-between">
                    {images.map((image, index) => (
                        <a key={index} href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img className="" src={image} alt={`Flowbite Logo ${index}`} />
                        </a>
                    ))}
                </div>
            </div>
        </section>

        </>
        
    
        
    );

    return (
        <>
            {renderComponent}
        </>
    );
}

export default PartnersComponent;
