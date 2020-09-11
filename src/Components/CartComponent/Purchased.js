import React, { Component } from 'react';
import NavBar from '../CommonNavbar';
import Footer from '../CommonFooter';




class Cartpage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="cart">
                   <h1 className="cart-title">Cart page</h1>
                </div>
                <div className='orders'>
                  <React.Fragment>
                    <h4 className="empty">Thank You for Ordering food. Your Order as recorded</h4>
                    <h6 className="empty">You will get your Order soon. Have a great day!</h6>
                  </React.Fragment>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Cartpage;