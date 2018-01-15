import React, { Component } from 'react';

const IsItADrill = props => {
  return (
      <form onSubmit={props.onSubmit}>
        <label>
          <input 
            type="radio" 
            name="not_a_drill" 
            checked={!props.drill}
            value="true"
          />
          THIS IS NOT A DRILL
        </label>
        <button className="huge" type="submit">Send Alert</button>
        <a href="#">test alert system</a>
    
      </form>
  );
}

export default IsItADrill;