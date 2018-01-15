import React, { Component } from 'react';

import Message from './Message.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Apocalypse Alert System</h2>
        </div>
      <Message/>
      </div>
    );
  }
}

export default App;
