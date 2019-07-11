import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


class App extends Component {
  state = {
    message: "",
    messageurl: "",
    buttoncode: "",
  }

  messageChangeHandler = (event) => {
    msg = event.target.value;
    alert(msg); //DEBUGGING
  }

  //IGNORE THIS FOR NOW
  generateHandler = (event) => {
    var link = encodeURIComponent(event.target.value);
    link = "https://api.whatsapp.com/send?text=" + link;
    //but_link = 
    alert(link);
    //return link;
  }
  render() {
    return(
      <div className="App">
        <h1>WhatsAppify</h1>
      
        
        <Input change= {this.messageChangeHandler} click = {this.generateHandler}/>
        <hr></hr>
        <Output />
      </div>
    );
  }
}

export default App;
