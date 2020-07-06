import React, { Component } from 'react';
import PlayerCard from "./PlayerCard";

class App extends Component {
  constructor(props) {
    super(props)
    this.symbols = ["rock", "paper", "scissors"]
    this.state = {}
  }

  decideWinner = () => {
    const {playerOne, playerTwo} = this.state
    if(playerOne == playerTwo) {
      return "It's a draw!"
    }
    if((playerOne==="rock" && playerTwo==="scissors") ||
      (playerOne==="paper" && playerTwo==="rock") ||
      (playerOne==="scissors" && playerTwo==="paper")) {
        return "Player One wins!"
      }
      return "Player Two wins!"
  }

  runGame = () => {
    let counter = 0
    let myInterval = setInterval(() => {
      counter++
      this.setState({
        playerOne: this.symbols[Math.floor(Math.random()*3)],
        playerTwo: this.symbols[Math.floor(Math.random()*3)],
        winner: ""
      })
      if(counter > 5) {
        clearInterval(myInterval)
        this.setState({winner: this.decideWinner()})
      }
    },100)
  }

  render() {
    return (
      <div className="ui container">
        <PlayerCard
          color="red"
          symbol={this.state.playerOne} 
        />
        <PlayerCard
          color="blue"
          symbol={this.state.playerTwo}
        />
        <p>{this.state.winner}</p>
        <button onClick={this.runGame}>Run Game</button>
      </div>
    )
  }
}

export default App;
