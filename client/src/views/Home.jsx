import React from 'react'
import { useSelector } from 'react-redux'
import NavbarComponent from '../components/navbarComponent'
import SidebarComponent from '../components/sidebarComponent'
import FooterComponent from '../components/FooterComponent'
import BodyComponent from '../components/BodyComponent'


const Home = () => {

    const user = useSelector((state)=> state?.user)
    console.log("Esto es user: ", user)
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