import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import PartnersComponent from '../components/PartnersComponent'
import FooterComponent from '../components/FooterComponent'
import VideosListComponent from '../components/VideosListComponent'
import VideosHeaderComponent from '../components/VideosHeaderComponent'

const Videos = () => {


    return (
        <div className=" bg-black  ">


            <NavbarComponent/>
            <VideosHeaderComponent/>
            <VideosListComponent/>
            <PartnersComponent/>
            <FooterComponent/>

        </div>
    )
}

export default Videos