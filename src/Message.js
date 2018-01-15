import React, { Component } from 'react';

// convenience method to get a random array member
function getRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

class Message extends Component {
  constructor () {
    super();
    
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
          <h1>ALERT!!!</h1>
          <h2>{ text }</h2> 
        </div>
    );
  }
}


export default Message;