import React from 'react';
import '../../Css/Contactus.css'


function Contactdetail(props) {
    return (
        <div class="contact">
              <h2>Contact</h2>
              <i class=" fas fa-phone icons"></i>
              <h6>Phone</h6>
              <span class="con">91+ 9543932555</span><br/>
              <span class="con">91+ 733858999</span><br/><br/>
              <i class="fa fa-envelope icons"></i>
              <h6>Email</h6>
              <span class="con">parvesfoods@gmail.com</span><br/> 
              <span class="con">foodsonline@gmail.com</span>
        </div>
    );
}

export default Contactdetail;