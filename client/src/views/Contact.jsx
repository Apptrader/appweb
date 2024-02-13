import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import ContactComponent from '../components/ContactComponent'
import FooterComponent from '../components/FooterComponent'
import PartnersComponent from '../components/PartnersComponent'


const Contact = () => {


    return (
    <div className='bg-black'>

        <NavbarComponent/>
        <ContactComponent/>
        <PartnersComponent/>
        <FooterComponent/> 

    </div>
    )
}

export default Contact