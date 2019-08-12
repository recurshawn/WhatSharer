import React from 'react';
import Header from './Header/Header.js';
import MessageArea from './MessageArea/MessageArea.js';

import Footer from './Footer/Footer.js'
import './App.css';
import URLArea from './URLArea/URLArea.js';

class App extends React.Component{

  state = {
    message: "Hey there, I am using WhatsAppr.com \n You should check it out!", //Init value if user doesn't type a message
    messageurl: "https://api.whatsapp.com/send?text=Hey%20there%2C%20I%20am%20using%20WhatsAppr.com%20You%20should%20check%20it%20out!",
    buttoncode: "",
  }

  //Update the state's message value when user types something
  messageChangeHandler = (e) => {
    this.setState({message: e.target.value});
  }

  //Call this function when you want to use the latest message url
  //It updates the url from the state's message and returns the url too
  messageurlGenerator = () => {
    var link = encodeURIComponent(this.state.message);
    link = "https://api.whatsapp.com/send?text=" + link
    return link;
  }


  bannercodeGenerator = () => {
    var bannercode = '<a href="'+"https://api.whatsapp.com/send?text="+this.state.message+'"><img src="https://blog.oppedahl.com/wp-content/uploads/2017/01/whatsapp-share.png" width="140" height="75" title="Share on WhatsApp" alt="Share on WhatsApp"></a>';
    return bannercode;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col pink">
              Hey
            </div>
            <div className="col-12">
              <MessageArea
                type = {this.messageChangeHandler}
                url = {this.messageurlGenerator}
              />
              </div>
              <div className="col pink">
                Hey there1
              </div>
            
          </div>
          

          <URLArea
            url = {this.messageurlGenerator}
          />

          
        </div>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
