import React, { Component } from 'react';
import Player from "./Player";

const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: symbols[0],
    playerTwo: symbols[0],
    winner: ""
  }

  runGame = () => {
    let count = 0;
    let gameInterval = setInterval(() => {
      count++;
      this.setState({
        playerTwo: symbols[Math.floor(Math.random() * symbols.length)],
        winner: ""
      })
      if(count > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        })
      }
    },100)
  }

  selectWinner = () => {
    const {playerOne, playerTwo} = this.state;

    if(playerOne === playerTwo) {
      return "It's a draw!"
    } else if ((playerOne === "rock" && playerTwo === "scissors") ||
              (playerOne === "scissors" && playerTwo === "paper") ||
              (playerOne === "paper" && playerTwo === "rock" ))
    {
      return "Player One Wins!"
    } else {
      return "Player Two Wins!"
    }
  };

  selectSymbol = () => {
    this.setState({
      playerOne: symbol,
      winner: ""
    })
  }

  render() {
    const {playerOne, playerTwo, winner} = this.state;
    return(
      <>
      <h1>Play a game of Rock Paper Scissors</h1>
      <div>
        <Player symbol={playerOne}/>
        <Player symbol={playerTwo}/>
      </div>
      <div>
        <button onClick={() => this.selectSymbol('rock')}>Rock</button>
        <button onClick={() => this.selectSymbol('paper')}>Paper</button>
        <button onClick={() => this.selectSymbol('scissors')}>Scissors</button>
      </div>
      <div className="winner">{winner ? this.selectWinner() : null}</div>

      <button type="button" onClick={this.runGame}>Play!</button>
      </>
    )
  }
}

export default App;
