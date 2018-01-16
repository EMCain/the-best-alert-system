import React, { Component } from 'react';

export class WarningIcon extends Component {
  render () {
    const classes = ['warning-icon'];
    classes.push(this.props.classes);
    
    return (
        <a className={classes.join(' ')} 
          title="By Amada44 (Own work) [Public domain], via Wikimedia Commons" 
          href="https://commons.wikimedia.org/wiki/File%3AWarning_icon.svg">
          
          <img width="256" alt="Warning icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Warning_icon.svg/256px-Warning_icon.svg.png"/>
      </a>

    );
  }
}

class Message extends Component {
  render () {    
    let alertHeader;
    let showCancel = false;    
    if (!this.props.countdownStarted) {
      alertHeader = 'ALERT!!!';
    } else if (this.props.countdown > 0) {
      alertHeader = `Sending message in ${this.props.countdown}...`;
      showCancel = true;
    } else {
      alertHeader = 'Message sent!';
    }

    return (
        <div>
          <h1>
            <WarningIcon classes="small"/>
            {alertHeader}

            <WarningIcon classes="small"/>
          </h1>
            { showCancel && 
              <a href="#" onClick={this.props.onCancel}>cancel</a>
            }
          <h2>
            { this.props.text } 
            { this.props.notADrill && ' THIS IS NOT A DRILL'}
          </h2>
        </div>
    );
  }
}

module.exports = {
  WarningIcon,
  Message
};