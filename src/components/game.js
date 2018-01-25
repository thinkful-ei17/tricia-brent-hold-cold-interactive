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
            inputGuess:'',
            guessList: [],
        }
    }

    displayModal() {
        console.log('woohoo')
        this.setState({modalView:!this.state.modalView})
    }

    setInputGuess(guess){
      console.log(guess);
      this.setState({inputGuess: guess})
    }

    submitGuess() {
      this.setState({inputGuess: '', guessList: [...this.state.guessList, this.state.inputGuess] });
      console.log(this.state.guessList)
    }

    render(){
        return (
            <div>
                <Header showModal={this.state.modalView} onWhatClicked={()=>this.displayModal()} />
                <GuessSection inputGuess={value=>{this.setInputGuess(value)}} 
                 submitGuess={()=>{this.submitGuess()}} currentGuess={this.state.inputGuess}/>
                <GuessCount count={this.state.guessList.length} />
                <GuessList guesses={this.state.guessList} />
            </div>
        );
    }
}

export default Game;

