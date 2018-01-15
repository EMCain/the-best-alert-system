import React, { Component } from 'react';

const IsItADrill = props => {
  return (
      <form>
        <label>
          <input 
            type="radio" 
            name="not_a_drill" 
            checked={!props.drill}
          />
          THIS IS NOT A DRILL
        </label>
        <button className="huge">Send Alert</button>
        <a href="#">actually don't</a>
    
      </form>
  );
}

export default IsItADrill;