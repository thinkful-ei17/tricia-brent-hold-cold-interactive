import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm handleUpdateUserGuess={value=>{props.handleUpdateUserGuess(value)}} handleSubmit={()=>props.submitGuess()}
            guessDraft={props.guessDraft}/>
        </section>
    );
}

