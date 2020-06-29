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
        {/* <h1>SMURFS! 2.0 W/ Redux</h1> */}
        <SmurfList />
        <div style={{marginTop: "15%"}}>
        <SmurfForm />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
