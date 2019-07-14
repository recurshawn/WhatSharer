import React from 'react';
import URLInfo from './URLInfo/URLInfo.js';

import {FormTextarea} from "shards-react";

const URL = (props) => {
    return(
    <div>
        <URLInfo />
        <FormTextarea 
            rows="5"
            value = {props.disp}
        />
    </div>
    );
}

export default URL;