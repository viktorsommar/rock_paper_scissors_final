import React, { Component } from 'react';
import Player from "./Player";

const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: symbols[0],
    playerTwo: symbols[0],
    winner: ""
  }

  render() {
    return(
      <>
      <h1>Play a game of Rock Paper Scissors</h1>
      <div>
        <Player />
      </div>
      <div>
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissors</button>
        <button>Play!</button>
      </div>
      </>
    )
  }
}

export default App;
