import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import PartnersComponent from '../components/PartnersComponent'
import FooterComponent from '../components/FooterComponent'
import NeoTechBodyComponent from '../components/neoTechAIRobot/NeoTechBody'

const NeoTechAIRobot = () => {


    return (
    <div className='bg-black'>

        <NavbarComponent/>
        <NeoTechBodyComponent/>
        <PartnersComponent/>
        <FooterComponent/> 
    </div>
    )
}

export default NeoTechAIRobot