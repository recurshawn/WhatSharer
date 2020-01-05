import React from 'react';
import ShareIcon from '../ShareIcon/ShareIcon.js';

const NumberArea = (props) => {
    return (
        <div className="NumberArea">
            <input
                className="NumberBox"
                type="number"
                placeholder="+910000000000"
                onChange={props.type}
            />
            <a href={props.url()} aria-label="Send your message on WhatsApp to a particular person">
                <ShareIcon
                /></a>
        </div>

            );
        }
        
export default NumberArea;