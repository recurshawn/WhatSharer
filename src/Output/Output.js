import React from 'react';
import {FormTextarea} from "shards-react";

const Output = (props) => {
    return(
    <div>
        <h3>Message URL</h3>
        <FormTextarea rows="10" cols="50"></FormTextarea>
        <h3>Share Button Code</h3>
        
        <FormTextarea rows="10" cols="50"></FormTextarea>
    </div>
    );
}

export default Output;