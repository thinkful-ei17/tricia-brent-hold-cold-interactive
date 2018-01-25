import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalView:false,
            guessDraft:'',// guessDraft
            submittedGuesses: [],
        }
    }

    displayModal() {
        console.log('woohoo')
        this.setState({modalView:!this.state.modalView})
    }
    // updateDraft or updateGuessDraft
    updateUserGuess(guess){
      console.log(guess);
      this.setState({guessDraft: guess})
    }

    submitGuess() {
      this.setState({guessDraft: '', submittedGuesses: [...this.state.submittedGuesses, this.state.guessDraft] });
      console.log(this.state.submittedGuesses)
    }

    render(){
        return (
            <div>
                <Header showModal={this.state.modalView} onWhatClicked={()=>this.displayModal()} />
                <GuessSection userGuess={value=>{this.updateUserGuess(value)}} 
                 submitGuess={()=>{this.submitGuess()}} guessDraft={this.state.guessDraft}/>
                <GuessCount count={this.state.submittedGuesses.length} />
                <GuessList guesses={this.state.submittedGuesses} />
            </div>
        );
    }
}

export default Game;

