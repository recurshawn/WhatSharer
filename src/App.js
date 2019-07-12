import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
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

  messageChangeHandler = (event) => {
    this.setState({message: event.target.value});
    var msg = this.state.message;
    alert(msg); //DEBUGGING: If the transfer works, alert will show
  }

  // IGNORE THIS FOR NOW
  // generateHandler = (event) => {
  //   var link = encodeURIComponent(event.target.value);
  //   link = "https://api.whatsapp.com/send?text=" + link;
  //   //but_link = 
  //   alert(link);
  //   //return link;
  // }

  render() {
    return(
      <div className="App">
        <h1>WhatsAppify</h1>
        <p>{this.state.message}</p>
        <Input 
          change = {this.messageChangeHandler} 
          //click = {this.generateHandler}
        />
        <Output />
      </div>
    );
  }
}

export default App;
