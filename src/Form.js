import React, { Component } from 'react';

const IsItADrill = props => {
  return (
      <form onSubmit={props.onSubmit}>
        <label>
          <input 
            type="radio" 
            name="not_a_drill" 
            name="not_a_drill" 
            defaultChecked={props.notADrill}
            value="true"
            onChange={props.onRadioChange}
          />
          THIS IS NOT A DRILL
        </label>
        <button className="huge" type="submit">Send Alert</button>
        <a href="#" onClick={props.onTestMode}>test alert system</a>
      </form>
  );
}

export default IsItADrill;