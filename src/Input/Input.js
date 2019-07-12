import React from 'react';
import MessageInfo from './MessageInfo/MessageInfo.js';
import {FormTextarea} from 'shards-react';

const Input = (props) => {
    return(
    <div>
        <MessageInfo />
        <FormTextarea 
            rows="10"
            
            onChange={props.change.messageChangeHandler}
        />
        <br />
    </div>
    );
}

export default Input;