import React from 'react';
import URLInfo from './URLInfo/URLInfo.js';
import copy from 'clipboard-copy';
import {FormTextarea, Button} from "shards-react";

const URL = (props) => {
    return(
    <div>
        <URLInfo />
        <FormTextarea 
            rows="5"
            value = {props.disp}
        />
        <br />
        <Button 
            className="first-button"
            theme="primary"
            onClick = {() => {
                copy(props.disp);}
                }
        >Copy</Button>

        <a href={props.disp}>
        <Button
            theme ="primary"
        >Share now</Button>
        </a>
    </div>
    );
}

export default URL;