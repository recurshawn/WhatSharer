import React from 'react';
import Emoji from '../Emoji/Emoji';
import './Footer.css';

const Footer = () => {
    return(
    <div className="Footer">
        <p>Made with <Emoji symbol="❤️" label="love"/> by <a href="https://recurshawn.github.io/">Shawn Pereira</a> Twitter:<a href="https://twitter.com/Incept_shawn">@Incept_shawn</a>
        <br/><a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/recurshawn"><Emoji symbol="🚀" label="rocket"/> Support this project!</a></p>
        Disclaimer: WhatSharer is not affiliated with WhatsApp Inc.
        <br/>© {new Date().getFullYear()} WhatSharer | All rights reserved
    </div>
    );
}

export default Footer;
