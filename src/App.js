import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './Components/HomeComponent/HomePage'
import CartPage from './Components/CartComponent/Cartpage'
import Purchased from './Components/CartComponent/Purchased'
import Aboutus from './Components/Aboutus/aboutus'
import  Contact from './Components/Contactus/Contactus'
import {Provider} from 'react-redux'
import {Store} from './ReduxStore/Store'



function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route  path="/cart" component={CartPage} />
    <Route  path="/purchased" component={Purchased} />
    <Route  path="/about" component={Aboutus} />
    <Route  path="/contact" component={Contact} />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
