import React from 'react';
import {Button} from 'shards-react';

const Generate = (props) => {
    return(
        <div>
            <Button 
                theme="primary" 
                onClick={props.click}
            >Generate</Button>
            <p className="mb-2">Click 'Generate' when the Message is ready</p>
        </div>
    );
}

export default Generate;