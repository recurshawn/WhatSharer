import React from 'react';
import MessageInfo from './MessageInfo/MessageInfo.js';
import {FormTextarea} from 'shards-react';

const Message = () => {
    return(
        <div>
            <MessageInfo />
            <FormTextarea 
                rows="10"
                //onChange={props.change.messageChangeHandler}
            ></FormTextarea>
        </div>
    );
}

export default Message;