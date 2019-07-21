import React from 'react';
//import MessageInfo from './MessageInfo/MessageInfo.js';
import {FormTextarea, Button} from 'shards-react';
import copy from 'clipboard-copy';

const Input = (props) => {
    return(
    <div>
        
        <FormTextarea 
            rows="5"
            onChange={props.change}
        />
        <i class="share icon"></i>
        <br/>
        <Button
            onClick = { () => {
                copy(props.generateurl())}
                }
        >Copy link to message</Button>
        <br />
    </div>
    );
}

export default Input;