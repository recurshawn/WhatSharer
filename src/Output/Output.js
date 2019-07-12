import React from 'react';
import Generate from './Generate/Generate.js';
import URL from './URL/URL.js';
import ButtonCode from './ButtonCode/ButtonCode.js';


const Output = () => {
    return(
    <div>
        <Generate />
        <hr />
        <URL/>
        <br />
        <ButtonCode />
    </div>
    );
}

export default Output;