import React from 'react';
import "./Header.css";
import Navb from "./Navb.js";

const Header = (props) => {
    return(
    <div>
        <h1>WhatsAppr</h1>
        <Navb className = "nav-bar"></Navb>
    </div>
    );
}

export default Header;