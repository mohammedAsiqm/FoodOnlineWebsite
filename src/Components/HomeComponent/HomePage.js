import React from 'react';
import NavBar from '../CommonNavbar'
import Section1 from './Section1'
import Footer from '../CommonFooter'
import {Provider} from 'react-redux'
import {Store} from '../../ReduxStore/Store'
import FoodOrder from './FoodOrder'


function HomePage(){
        return (
            <Provider store = {Store} >
                <NavBar />
                <Section1/>
                <FoodOrder/>
                <Footer/>
            </Provider>
        )
        
        
}

export default HomePage;