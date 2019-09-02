import React from 'react';
import ShareIcon from '../ShareIcon/ShareIcon.js';

const MessageArea = (props) => {
    return(
    <div className="MessageArea">

        <textarea
            placeholder = "Type the message you want to make shareable here..."
            onChange = {props.type}
            rows = "6"
        />
        <a href= {props.url()}>
            <ShareIcon
            
        />
        </a>
        
    </div>
    );
}

export default MessageArea;