import React, { Component } from 'react';
import flags from '../flags.json'
import FlagCard from './FlagCard';

let test;

class GameContainer extends Component {

    state = {
        score: 0,
        flags: flags,
        clickedFlags: []
    };

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    handleClick = event => {
        test = event.target;
        console.log(test);
    }

    render(){
        return (
            <div>
                {this.shuffle(this.state.flags).map(flag => {
                    return <FlagCard id={flag.id} key={flag.id} image={flag.image} country={flag.country} handleClick={this.handleClick} />
                })}
                {console.log(test)}
            </div>
        )
    }
}

export default GameContainer;
