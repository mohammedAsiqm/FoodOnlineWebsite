import React from 'react';
import NavBar from '../CommonNavbar';
import Footer from '../CommonFooter';
import CartSection from './CartSection'
import {Provider} from 'react-redux'
import {Store} from '../../ReduxStore/Store'


function Cartpage(){
        return (    
            <Provider store ={Store}>
                <NavBar/>
                <CartSection/>
                <Footer/>
            </Provider>
        );
  }


export default Cartpage;