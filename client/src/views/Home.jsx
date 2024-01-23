import React from 'react'
import NavbarComponent from '../components/navbarComponent'
import SidebarComponent from '../components/sidebarComponent'
import FooterComponent from '../components/FooterComponent'
import BodyComponent from '../components/BodyComponent'


const Home = () => {


    return (
    <div>
        <NavbarComponent/>
        <SidebarComponent />
        <BodyComponent />
        
       

        {/*  <FooterComponent /> */}
    </div>
    )
}

export default Home