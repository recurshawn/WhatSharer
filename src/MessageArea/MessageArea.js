import React from 'react';
import ShareIcon from '../ShareIcon/ShareIcon.js';

const MessageArea = (props) => {
    return(
    <div className="MessageArea">
        <p>Type the message you want to generate the URL for below. If you want to send the message directly to WhatsApp, hit the send button and forward the message among your contacts.</p>
        <textarea
            placeholder = "Type the message you want to make shareable here..."
            onChange = {props.typeMessage}
            rows = "6"
        />
        <p>After typing the message, you can hit send. <strong>OPTIONAL:</strong> If you type a WhatsApp number in the box below, you can directly send the message to someone even if you haven't saved their number. Don't forget the country code! (Preceding '+' can be ignored)</p>
        <input
                className="NumberBox"
                type="number"
                placeholder="WhatsApp Number"
                onChange={props.typeNumber}
            />
        <a href= {props.url()} aria-label="Send your message on WhatsApp to multiple people">
            <ShareIcon/>
        </a>
        
    </div>
    );
}

export default MessageArea;