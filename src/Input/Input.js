import React from 'react';
import Message from './Message/Message.js';
import Generate from './Generate/Generate.js';

const Input = (props) => {
    return(
    <div>
        <Message/>
        <br />
        <Generate />
    </div>
    );
}

export default Input;