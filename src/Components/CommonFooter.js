import React from 'react';
import '../Css/Footer.css'
import '../icons/css/all.min.css'


function CommonFooter() {
    return (
        <div>
            <div className="footer">

            <div className="address">
                <h4>Address </h4>
                <h6>No.6 Subramani  Swamy  koil  Street,<br/>Alandur, Chennai-600016</h6>
             </div>
                <hr id="hr"/>
            <div className="foot">
                <li> <a href="/"> Privacy  </a></li>
                <li> <a href="/"> Terms    </a> </li>
                <li> <a href="/"> Security </a> </li>
                <li> <a href="/"> Policy   </a> </li>
                <li> <a href="/"> Community</a> </li>
            </div>
            <div className="icon">
                 <a href="/"> <i className="fab fa-facebook"></i></a>
                 <a href="/"> <i className="fab fa-instagram"></i></a>
                 <a href="/"><i className="fab fa-twitter"></i></a>
                 <a href="/"> <i className="fab fa-whatsapp"></i></a>
            </div>
    </div>
</div>
    );
}


export default CommonFooter;