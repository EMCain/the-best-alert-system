import React, { Component } from 'react';

import { Message, WarningIcon } from './Message.js';
import IsItADrill from './Form.js';

import generateMessage from './middleware/messages.js';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);    
    this.state = {
      baseMessage: generateMessage(),
      notADrill: true,
      countdown: 10,
      countdownStarted: false
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.cancelMessage = this.cancelMessage.bind(this);
    this.testMode = this.testMode.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  
  submitForm (event) {
    event.preventDefault();
    const form = event.target;

    this.setState(
      {
        'countdown': 10, 
        'countdownStarted': true
      }
    );
    this.startTimer();
  }
  
  // attach this as a listener to the link that shows up during the countdown
  cancelMessage (event) {
    event.preventDefault();
    if (confirm("are you sure you want to cancel this alert?")) {
      clearInterval(this.timer);
      this.timer = 0;
      this.setState({
        countdown: 10,
        countdownStarted: false,
      });
    } 
  }
  
  // timer inspired by https://stackoverflow.com/a/40887181
  componentDidMount() {
    let timeLeftVar = this.state.countdown;
    this.setState({'countdown': timeLeftVar});
  }
  
  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({countdownStarted: true});
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.countdown - 1;
    this.setState({
      countdown: seconds,
      countdownStarted: true
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
    }
  }

  // attach this as a listener to the "test" link after the button
  testMode(event)  {
    if (confirm("this will send the message out as a test. Are you sure?")) {
      event.preventDefault();
      this.setState({
        notADrill: false
      });
      document.querySelector('input[type=radio]').checked = false;
    }
  }
  
  onRadioChange (event) {
    const form = event.target;
    this.setState(
      {
        'notADrill': form.not_a_drill.value === 'true', 
    });
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
      <Message 
        text={this.state.baseMessage} 
        notADrill={this.state.notADrill} 
        countdownStarted={this.state.countdownStarted}
        countdown={this.state.countdown}
        onCancel={this.cancelMessage}
        onTestMode={this.testMode}
      />
      <IsItADrill onRadioChange={this.onRadioChange} notADrill={typeof(this.state.notADrill) === 'undefined' || this.state.notADrill} onTestMode={this.testMode.bind(this)} onSubmit={this.submitForm.bind(this)}/>
      </div>
    );
  }
}

export default App;
