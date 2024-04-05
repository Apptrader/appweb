import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import ContactComponent from '../components/ContactComponent'
import FooterComponent from '../components/FooterComponent'
import PartnersComponent from '../components/PartnersComponent'
import TermsComponent from '../components/TermsComponent'


const TermsAndConditions = () => {


    return (
    <div className='bg-black'>

        <NavbarComponent/>
        <TermsComponent/>
        <PartnersComponent/>
        <FooterComponent/> 

    </div>
    )
}

export default TermsAndConditions