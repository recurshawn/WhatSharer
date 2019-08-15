import React from 'react';
import CopyIcon from './CopyIcon/CopyIcon.js';

class URLArea extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = { copySuccess: '' }
    }
  
    copyToClipboard = (e) => {
      this.textarea.select();
      document.execCommand('copy');
      // This is just personal preference.
      // I prefer to not show the the whole text area selected.
      e.target.focus();
      this.setState({ copySuccess: 'Copied!' });
      setTimeout(() => this.setState({copySuccess:''}), 2000);

    };

    // componentDidUpdate(){
    //     setTimeout(() => this.setState({copySuccess:''}), 2000);
    //   }
  
    render() {
      return (
          
        <div className="URLArea">
            <h3>Message URL</h3>
            <textarea
              ref={(textarea) => this.textarea = textarea}
              value={this.props.url()}
              rows= "1"
            />
          {
           /* Logical shortcut for only displaying the 
              button if the copy command exists */
           document.queryCommandSupported('copy') &&
            <div>
              <CopyIcon 
                copy={this.copyToClipboard}
              />
                {this.state.copySuccess}
            </div>
          }
        </div>
      );
    }
  
  }
  
  export default URLArea;