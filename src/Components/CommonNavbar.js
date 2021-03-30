import React from 'react';
import '../Css/Navbar.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import '../icons/css/all.min.css'


function CommonNavbar() {
  let CountBatch = useSelector(state => state.Count.NoOfCount)

    return (
        <header className="topnav">
              <h1 className="h1">PARVES FOODS</h1>
              <input type='checkbox' id="check"/>
              <label for='check'>
              <i className='fas fa-bars baricon' id='icon'></i><span className={CountBatch>0?"batch1 baricon":'baricon'} > {CountBatch===0 ? null : CountBatch}</span></label>
             <nav className="navi">
                <li><Link to="/"> HOME </Link> </li>
                <li ><Link to="/cart">ORDER
                <span className={CountBatch>0?"batch":null} > {CountBatch===0 ? null : CountBatch}</span> </Link> </li>   
                <li><Link to='/about'>ABOUT US</Link> </li>
                <li><Link to='/contact'>CONTACT US</Link>  </li> 
             </nav> 
        </header>
    );
}


export default CommonNavbar;