import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
  function value(value){
    console.log(value);
  }
    return (
        <form onSubmit={e=>{e.preventDefault(); props.handleSubmit()}}>
            <input value={props.inputGuess} onChange={e=>{props.guess(e.target.value)}} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

