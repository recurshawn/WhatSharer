import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import Header from './Header/Header.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

///import {FormTextarea} from 'shards-react';
///dfdffd
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
    message: "This should eventually change, if it doesn't ERROR", //Init value to aid in debugging
    messageurl: "",
    buttoncode: "",
  }

  messageChangeHandler = (e) => {
    this.setState({message: e.target.value});
  }

  
  generateHandler = () => {
    var link = encodeURIComponent(this.state.message);
    link = "https://api.whatsapp.com/send?text=" + link;
    this.setState({messageurl: link});
    var but_link = '<a href="'+link+'"><img src="https://blog.oppedahl.com/wp-content/uploads/2017/01/whatsapp-share.png" width="140" height="75" title="White flower" alt="Flower"></a>';
    this.setState({buttoncode: but_link});
  }

  render() {
    return(
      <div className="App">
        <Header />
        <div className="bod">
          <Input 
            change = {this.messageChangeHandler} 
          />
          <Output 
            click = {this.generateHandler}
            urlDisp = {this.state.messageurl}
            buttonDisp = {this.state.buttoncode}
          />
        </div>
        <br />
      </div>
    );
  }
}

export default App;
