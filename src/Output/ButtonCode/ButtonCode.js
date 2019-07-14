import React from 'react';
import ButtonInfo from './ButtonInfo/ButtonInfo.js';
import {FormTextarea} from "shards-react";

const ButtonCode = (props) => {
    return(
    <div>
        <ButtonInfo />
        <FormTextarea 
            rows="5"
            value = {props.disp}
        />
    </div>
    );
}

export default ButtonCode;