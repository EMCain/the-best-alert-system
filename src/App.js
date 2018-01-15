import React, { Component } from 'react';

import { Message, WarningIcon } from './Message.js';
import IsItADrill from './Form.js';

import generateMessage from './middleware/messages.js';

import './App.css';



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      baseMessage: generateMessage()
    };
  }
  
  submitForm (event) {
    event.preventDefault();
    const form = event.target;
    alert("sending message...");
  }
  
  
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
      <Message text={this.state.baseMessage}/>
      <IsItADrill drill={false} onSubmit={this.submitForm}/>
      </div>
    );
  }
}

export default App;
