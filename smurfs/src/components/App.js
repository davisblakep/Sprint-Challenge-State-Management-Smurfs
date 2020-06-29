import React, { Component } from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import NavAppBar from './NavAppBar'

class App extends Component {
  render() {
    return (
      <div className="background-image">
        <NavAppBar />
        <div className="App">
        
        <SmurfList />
        <SmurfForm />
        </div>
     
      </div>
    );
  }
}

export default App;
