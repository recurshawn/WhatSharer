import React from 'react';
import Logo from '../WhatSharer Logo.png';
import './Header.css';
const Header = () => {
    return(
    <div className="Header">
        <div className="logotext">
        <img className="logo" src={Logo} alt="WhatSharer Logo"/>
        <h1>WhatSharer</h1>
        </div>
    </div>
    );
}

export default Header;