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
    message: "Hey there, I am using WhatSharer.com \n You should check it out!", //Init value if user doesn't type a message
    messageurl: "https://api.whatsapp.com/send?text=Hey%20there%2C%20I%20am%20using%20WhatSharer.com%20You%20should%20check%20it%20out!",
    buttoncode: "",
    number: "",
  }

  //Update the state's message value when user types something
  messageChangeHandler = (e) => {
    this.setState({message: e.target.value});
    this.setState({messageurl: this.messageurlGenerator(e.target.value, this.state.number)});
  }

  numberChangeHandler = (e) => {
      this.setState({number: e.target.value});
      this.setState({messageurl: this.messageurlGenerator(this.state.message, e.target.value)});
  }



  //Call this function when you want to use the latest message url
  //It updates the url from the state's message and returns the url too
  messageurlGenerator = (message = this.state.message, number = this.state.number) => {
    var msgEncoded ='';
    var link= '';
    if(message !== '')
    {
      msgEncoded = encodeURIComponent(message);
    } else {
      msgEncoded = encodeURIComponent("Hey there, I am using WhatSharer.com \n You should check it out!");
    }
    if(number!== '')
    {
      link = "https://wa.me/" + number + "?text=" + msgEncoded;
    } else {
      link = "https://api.whatsapp.com/send?text=" + msgEncoded;
    }
    
    return link;
  }



  bannercodeGenerator = () => {
    var bannercode = '<a href="' + this.messageurlGenerator(this.state.message, this.state.number)+'"><img src="https://res.cloudinary.com/dxafjfxod/image/upload/v1595861934/WhatSharer/Powered_By_WhatSharer_izeybs.png" style="display: block; margin-left: auto; margin-right: auto; max-width: 200px; width: 50%;" title="Share on WhatsApp" alt="Share on WhatsApp"></a>';
    return bannercode;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">

              <a href="#FAQs"><p className="messageBubble red">How do I use this?</p></a>
              <div className = "messageBubble white row">
                <div className="col"></div>
                <div className="col"><a href="https://www.producthunt.com/posts/whatsappr?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-whatsappr" target="_blank" rel="noopener noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=167171&theme=dark&period=daily" alt="WhatSharer - Generate WhatsApp message URLs & send bulk messages easily | Product Hunt Embed" width="250px" height="54px" /></a></div>
                <div className="col"></div>
              </div>
              <div className = "messageBubble green">
                <MessageArea
                  typeMessage = {this.messageChangeHandler}
                  typeNumber = {this.numberChangeHandler}
                  url = {this.messageurlGenerator}
                
                />
               
              </div>
              
              <br/>
              <div className = "messageBubble green">
                <URLArea
                  url = {this.messageurlGenerator}
                />
              </div>
              
              <br/>
              <div className = "messageBubble green">
                <BannerArea
                  bannercode = {this.bannercodeGenerator}
                  url = {this.messageurlGenerator}
                />
              </div>
              
              <br/>
              <Info/>
        </div>
        <Footer/>
      </div>

    );
  }
  
}

export default App;
