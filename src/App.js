import React from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


const App = () => {
  // const state = {
  //   persons : [{name: "Not Shawn", age: 19},
  //              {name:  "Not Jeff", age: 30}]
  // }
  return (
    <div className="App">
      <h1>WhatsAppify</h1>
      {/* <p>2 + 3 = {Math.floor(Math.random()*30)}</p>
      <Person name= {state.persons[0].name} age= {state.persons[0].age}></Person>
      <Person name= {state.persons[1].name} age = {state.persons[0].age}></Person>
      <button>New sum</button> */}
      
      <Input />
      <hr></hr>
      <Output />
    </div>
  );
}

export default App;
