import React, { Component } from 'react';

import { Message, WarningIcon } from './Message.js';
import IsItADrill from './Form.js';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="github-link">
          <a className="corner-link" href="https://github.com/EMCain/the-best-alert-system" target="blank">WTF is this??</a>
        </div>
        <div className="App-header">
          <WarningIcon classes="large"/>
          <h2>
            Apocalypse Alert System
          </h2>
        </div>
      <Message/>
      <IsItADrill drill={false}/>
      </div>
    );
  }
}

export default App;
