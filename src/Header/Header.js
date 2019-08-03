import React from 'react';
import "./Header.css";
import Navb from "./Navb.js";
import Logo from "./WhatsAppr Logo.png";
const Header = (props) => {
    return(
    <div>
        
            <img src={Logo} alt="WhatsAppr Logo"/>
            <h1>WhatsAppr</h1>
        
        <Navb className = "nav-bar"></Navb>
    </div>
    );
}

export default Header;