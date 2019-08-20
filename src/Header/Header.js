import React from 'react';
import Logo from '../whatsappr logo.png';
import './Header.css';
const Header = () => {
    return(
    <div className="Header">
        <img class="logo" src={Logo} alt="WhatsAppr Logo"/>
        <h1>WhatsAppr</h1>
    </div>
    );
}

export default Header;