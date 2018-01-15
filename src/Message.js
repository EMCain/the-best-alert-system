import React, { Component } from 'react';

// convenience method to get a random array member
function getRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

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
  constructor (props) {
    super(props);
    
    const victim = getRandom(['Earth', 'The Government', 'Humanity']);
    const verb = getRandom(['Invaded', 'Destroyed', 'Infected', 'Crushed', 'Wiped Out']);
    const adjective = getRandom(['Giant', 'Mutant', 'Radioactive', 'Undead', 'Demonic']);
    const monster = getRandom(['Aliens', 'Werewolves', 'Spiders', 'Mansplainers']);
        
    this.state = {
      'text': `${victim} has been ${verb} by ${adjective} ${monster}!!!`,
    };
  }
  
  render () {
    const text = this.state.text;
    return (
        <div>
          <h1>
            <WarningIcon classes="small"/>
            ALERT!!!
            <WarningIcon classes="small"/>
          </h1>
          <h2>{ text }</h2>
        </div>
    );
  }
}

module.exports = {
  WarningIcon,
  Message
};