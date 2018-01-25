import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalView:false
        }
    }

    displayModal() {
        console.log('woohoo')
        this.setState({modalView:!this.state.modalView})
    }

    render(){
        return (
            <div>
                <Header showModal={this.state.modalView} onWhatClicked={()=>this.displayModal()} />
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

export default Game;

