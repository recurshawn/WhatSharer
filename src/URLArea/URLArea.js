import React from 'react';
import CopyArea from '../CopyArea/CopyArea.js';

const URLArea = (props) => {
  return (
    <div className="URLArea">
      <h3>WhatsApp Message URL</h3>
      <p>URL for the WhatsApp message you've typed. Copy and share the link below to allow others to share your message.</p>
      <CopyArea 
        contents = {props.url}
      />
    </div>
    
        
  );
}
  
  
export default URLArea;