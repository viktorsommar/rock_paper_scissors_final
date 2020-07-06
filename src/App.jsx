import React, { Component } from 'react';

const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  render() {
    return(
      <>
      <h1>Play a game of Rock Paper Scissors</h1>
      <div>
        <button>Play!</button>
      </div>
      </>
    )
  }
}

export default App;
