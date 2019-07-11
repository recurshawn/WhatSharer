import React from 'react';
import {Button, FormTextarea} from "shards-react";

const Input = (props) => {
    return(
    <div>
        <h2>Message</h2>
        <p className="mb-2">Put the message you want to make shareable on WhatsApp here</p>
        <FormTextarea rows="10" cols="50"></FormTextarea>
        <br></br>
        <Button outline theme="primary">Generate</Button>
        <p className="mb-2">Click 'Generate' when the Message is ready</p>
    </div>
    );
}

export default Input;