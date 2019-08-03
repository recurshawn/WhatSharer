import React, { Component } from 'react';
import './App.css';
import MessageArea from './MessageArea/MessageArea.js';
import Output from './Output/Output.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


///import {FormTextarea} from 'shards-react';

/*  Component structure

    App
      |_ Input
      |       |_ MessageInfo - h3, paragraph etc.
      |       |_ FormTextarea  {On change(or on Generate button click), Value of textarea goes to App state}
      |
      |
      |_ Output
               |_ Generate
               |         |_ Button, paragraph etc. {On click, data from App state is modified and sent to URL and ButtonCode textareas}
               |_ URL
               |    |_ URLInfo - h3, paragraph etc.
               |    |_ FormTextarea
               |
               |_ ButtonCode
                          |_ ButtonInfo - h3, paragraph etc
                          |_ FormTextarea




*/

class App extends Component {

  state = {
    message: "Hey there, I am using WhatsAppr.com You should check it out!", //Init value if user doesn't type a message
    messageurl: "https://api.whatsapp.com/send?text=Hey%20there%2C%20I%20am%20using%20WhatsAppr.com%20You%20should%20check%20it%20out!",
    buttoncode: "",
  }

  //updates the state of new message whenever a change is detected
  messageChangeHandler = (e) => {

    this.setState({message: e.target.value});
    /*
    var link = encodeURIComponent(this.state.message);
    link = "https://api.whatsapp.com/send?text=" + link;
    this.setState({messageurl: link}); */
  
  }

  //Call this function when you want to use the latest message url
  //It updates the url state and returns the link too
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
    return(
      <div className="App">
        <Header />
        <div className="bod">
          <MessageArea 
            change = {this.messageChangeHandler}
            generateurl = {this.messageurlGenerator}
            msgurl = {this.state.messageurl}
            msg = {this.state.message}
            bannercode = {this.bannercodeGenerator}
          />
          
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
