import React from 'react';
import Header from './Header/Header.js';
import MessageArea from './MessageArea/MessageArea.js';
import NumberArea from './NumberArea/NumberArea.js';
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
    number: "",
  }

  //Update the state's message value when user types something
  messageChangeHandler = (e) => {
    if(e.target.value !== "")
    {
      this.setState({message: e.target.value});
    }
    else
    {
      this.setState({message: "Hey there, I am using WhatsAppr.com \n You should check it out!"});
    }
      
  }

  numberChangeHandler = (e) => {
    if(e.target.value == "")
    {
      return;
    }
    else
    {
      this.setState({number: e.target.value});
    }
  }

  numberurlGenerator = () =>
  {
    var link = "https://wa.me/" + this.state.number + "/?text=" + encodeURIComponent(this.state.message);
    return link;
  }

  //Call this function when you want to use the latest message url
  //It updates the url from the state's message and returns the url too
  messageurlGenerator = () => {
    var link = encodeURIComponent(this.state.message);
    link = "https://api.whatsapp.com/send?text=" + link;
    return link;
  }


  bannercodeGenerator = () => {
    var bannercode = '<a href="https://api.whatsapp.com/send?text=' + encodeURIComponent(this.state.message)+'"><img src="https://res.cloudinary.com/dxafjfxod/image/upload/v1567597636/WhatsAppr/banner_jhebut.png" style="display: block; margin-left: auto; margin-right: auto; max-width: 200px; width: 50%;" title="Share on WhatsApp" alt="Share on WhatsApp"></a>';
    return bannercode;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">

              <a href="#FAQs"><p className="messageBubble red">How do I use this?</p></a>
              <div className = "messageBubble white">
                <h1>Should I move this to the footer?</h1>
                <a href="https://www.producthunt.com/posts/whatsappr?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-whatsappr" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=167171&theme=dark&period=daily" alt="WhatsAppr - Generate WhatsApp message URLs & send bulk messages easily | Product Hunt Embed" width="250px" height="54px" /></a>
              </div>
              <div className = "messageBubble green">
                <MessageArea
                  typeMessage = {this.messageChangeHandler}
                  typeNumber = {this.numberurlGenerator}
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
