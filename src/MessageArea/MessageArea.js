import React from 'react';
import ShareIcon from '../ShareIcon/ShareIcon.js';
import '../App.css';
const MessageArea = (props) => {
    return(
    <div className="MessageArea">
        
        <textarea
            placeholder = "Type the message you want to make shareable here..."
            onChange = {props.type}
            rows = "10"
        />

        <ShareIcon
            url = {props.url}
        />
    </div>
    );
}

export default MessageArea;