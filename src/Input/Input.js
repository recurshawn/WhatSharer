import React from 'react';
import MessageInfo from './MessageInfo/MessageInfo.js';
import {FormTextarea} from 'shards-react';

const Input = (props) => {
    return(
    <div>
        <MessageInfo />
        <FormTextarea 
            rows="5"
            onChange={props.change}
        />
        <br />
    </div>
    );
}

export default Input;