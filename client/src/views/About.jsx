import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import PartnersComponent from '../components/PartnersComponent'
import FooterComponent from '../components/FooterComponent'
import AboutHeaderComponent from '../components/AboutHeaderComponent'



const About = () => {


    return (
        <div className=" bg-black  ">


            <NavbarComponent/>
            <AboutHeaderComponent/>
            <PartnersComponent/>
            <FooterComponent/>

        </div>
    )
}

export default About