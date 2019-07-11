import React from 'react';
import URLInfo from './URLInfo/URLInfo.js';

import {FormTextarea} from "shards-react";

const URL = () => {
    return(
    <div>
        <URLInfo />
        <FormTextarea rows="10"/>
    </div>
    );
}

export default URL;