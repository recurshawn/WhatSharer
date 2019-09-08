import React from 'react';
import Logo from '../whatsappr logo.svg';
import './Header.css';
const Header = () => {
    return(
    <div className="Header">
        <div className="logotext">
        <img class="logo" src={Logo} alt="WhatsAppr Logo"/>
        <h1>WhatsAppr</h1>
        </div>
    </div>
    );
}

export default Header;