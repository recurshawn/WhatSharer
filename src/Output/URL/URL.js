import React from 'react';
import URLInfo from './URLInfo/URLInfo.js';

import {FormTextarea, Button} from "shards-react";

const URL = (props) => {
    return(
    <div>
        <URLInfo />
        <FormTextarea 
            rows="5"
            value = {props.disp}
        />
        <Button 
            theme="primary"
        >Copy</Button>
    </div>
    );
}

export default URL;