import React from 'react';
import ShareIcon from '../ShareIcon/ShareIcon.js';

const NumberArea = (props) => {
    return (
        <div className="NumberArea">
            <input placeholder="Enter phone number you want to text"
                onChange={props.type}
            />
            <a href={props.url()} aria-label="Send your message on WhatsApp to a particular person">
                <ShareIcon
                /></a>
        </div>

            );
        }
        
export default NumberArea;