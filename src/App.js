import React from 'react';
import Header from './Header/Header.js';
import MessageArea from './MessageArea/MessageArea.js';
import URLArea from './URLArea/URLArea.js';
import BannerArea from './BannerArea/BannerArea.js';
import Info from './Info/Info.js';
import Footer from './Footer/Footer.js';

import './App.css';



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
    var bannercode = '<a href="https://api.whatsapp.com/send?text=' + this.state.message+'"><img src="PUT URL HERE" style="display: block; margin-left: auto; margin-right: auto; max-width: 200px; width: 50%;" title="Share on WhatsApp" alt="Share on WhatsApp"></a>';
    return bannercode;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
         
              <MessageArea
                type = {this.messageChangeHandler}
                url = {this.messageurlGenerator}
              />
              <br/>
              <URLArea
                url = {this.messageurlGenerator}
              />
              <br/>
              <BannerArea
                bannercode = {this.bannercodeGenerator}
                url = {this.messageurlGenerator}
              />
              <br/>
              <Info/>
        </div>
        <Footer/>
      </div>

    );
  }
  
}

export default App;
