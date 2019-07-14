import React from 'react';
import Generate from './Generate/Generate.js';
import URL from './URL/URL.js';
import ButtonCode from './ButtonCode/ButtonCode.js';


const Output = (props) => {
    return(
    <div>
        <Generate 
            click = {props.click}
        />
        <hr />
        <URL
            disp = {props.urlDisp}
        />
        <br />
        <ButtonCode 
            disp = {props.buttonDisp}
        />
    </div>
    );
}

export default Output;