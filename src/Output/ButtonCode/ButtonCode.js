import React from 'react';
import ButtonInfo from './ButtonInfo/ButtonInfo.js';
import {FormTextarea} from "shards-react";

const ButtonCode = () => {
    return(
    <div>
        <ButtonInfo />
        <FormTextarea rows="10"/>
    </div>
    );
}

export default ButtonCode;