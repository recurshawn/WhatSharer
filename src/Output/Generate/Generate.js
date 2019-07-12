import React from 'react';
import {Button} from 'shards-react';

const Generate = () => {
    return(
        <div>
            <Button 
                outline theme="primary" 
                //onClick={props.click}
            >Generate</Button>
            <p className="mb-2">Click 'Generate' when the Message is ready</p>
        </div>
    );
}

export default Generate;