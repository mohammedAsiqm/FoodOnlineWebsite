import React from 'react';
import Navbar from '../CommonNavbar'
import Content from './content'
import Footer from '../CommonFooter'
import '../../Css/Aboutus.css'


function Aboutus() {
    return (
        <div>
            <Navbar/>
            <div className="aboutsection ">
                <div className="aboutheader">
                <h6>OUR MISSION</h6>
                <h1>Shaping the future of food</h1>
                </div>
            </div>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Aboutus;