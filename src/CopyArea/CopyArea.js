import React from 'react';
import CopyIcon from './CopyIcon/CopyIcon.js';

class CopyArea extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = { copySuccess: 'Copy to Clipboard',
                     pStyle: '' }
    }
  
    copyToClipboard = (e) => {
      this.textarea.select();
      document.execCommand('copy');
      e.target.focus();
      this.setState({ copySuccess: 'Copied to Clipboard', pStyle: 'highlight' });
      setTimeout(() => this.setState({copySuccess: 'Copy to Clipboard', pStyle: ''}), 2000);

    };

  
    render() {
      return (
          
        <div className="row">
          <div className="col-9">
            <textarea
              //disabled = "disabled"
              ref={(textarea) => this.textarea = textarea}
              value={this.props.contents()}
              rows= "2"
            />
          </div>
          {
           /* Logical shortcut for only displaying the 
              button if the copy command exists */
           document.queryCommandSupported('copy') &&
           <div className="col">     
           <CopyIcon
            copy={this.copyToClipboard}
            txt = {this.state.copySuccess}
            pStyle = {this.state.pStyle}
           />
          </div>          
                    
                
        
          }
        </div>
      );
    }
  
  }
  
  export default CopyArea;