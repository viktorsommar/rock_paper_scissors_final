import React, { Component } from 'react';
import Player from "./Player";

const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  render() {
    return(
      <>
      <h1>Play a game of Rock Paper Scissors</h1>
      <div>
        <Player />
        <button>Play!</button>
      </div>
      </>
    )
  }
}

export default App;
