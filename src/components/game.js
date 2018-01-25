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
            feedback:'Make a guess',
            randomNumber:null,
        }
    }

    componentDidMount(){
        this.generateRandomNumber();
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
    //handle guess submitted 
    submitGuess() {
      this.setState({
          guessDraft: '', 
          submittedGuesses: [...this.state.submittedGuesses, this.state.guessDraft],
          feedback:this.generateFeedbackText(), 
        });
    }
    //
    generateFeedbackText(){
        const {guessDraft,randomNumber}=this.state;
        let newNumber = Math.abs(randomNumber - guessDraft)
        // console.log('[guessdraft]',typeof guessDraft);
        // console.log('[randomNumber]',typeof randomNumber);
        // console.log('[newNumber]',typeof newNumber,newNumber);

        if (newNumber >= 15){
            return'Cold'
        }
        else if (newNumber >= 10) {
            return'Warm'
        }
        else if (newNumber >= 5) {
            return'Hot'
        }
        else if (newNumber > 0) {
            return'Burning up'
        }
        else {
            return 'Correct!'
        }
       
           
            
        

    }

    generateRandomNumber(){
        this.setState({ randomNumber: Math.floor(Math.random() * 101)}) 
    }

    render(){

        return (
            <div>
                <Header showModal={this.state.modalView} onWhatClicked={()=>this.displayModal()} />
                <GuessSection feedback={this.state.feedback} handleUpdateUserGuess={value=>{this.updateUserGuess(value)}} 
                 submitGuess={()=>{this.submitGuess()}} guessDraft={this.state.guessDraft}/>
                <GuessCount count={this.state.submittedGuesses.length} />
                <GuessList guesses={this.state.submittedGuesses} />
            </div>
        );
    }
}

export default Game;

