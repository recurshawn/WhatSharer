import React from 'react';
import CopyArea from '../CopyArea/CopyArea.js';

const URLArea = (props) => {
  return (
    <div className="URLArea">
      <h3>WhatsApp Message URL 🔗</h3>
      <CopyArea 
        contents = {props.url}
      />
    </div>
    
        
  );
}
  
  
export default URLArea;