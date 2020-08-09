import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button, Header } from 'semantic-ui-react';


const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: [],
    playerTwo: [],
    selectWinner: []
  }

  startGame = (event) => {
    const playerOne = event.target.id;
    const playerTwo = symbols[Math.floor(Math.random() * symbols.length)]
    const selectWinner = this.selectWinner(playerOne, playerTwo)
    this.setState({
      playerOne: playerOne,
      playerTwo: playerTwo,
      selectWinner: selectWinner
    })
  }

  selectWinner = (playerOne, playerTwo) => {
    if(playerOne === playerTwo) {
      return  "It's a draw!"
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") || 
      (playerOne === "scissors" && playerTwo === "paper") || 
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins!"
    } else {
      return "Player Two Wins!"
    }
  };

  render() {
    return (
      <>
      <Header as='h2' icon>
          Rock Paper Scissors
        <Header.Subheader>
          Play a quick game of rock paper scissors!
        </Header.Subheader>
      </Header>
        <div>
          <Button id="rock" onClick={this.startGame.bind(this)}>rock</Button>
          <Button id="paper" onClick={this.startGame.bind(this)}>paper</Button>{" "}
          <Button id="scissors" onClick={this.startGame.bind(this)}>scissors</Button>
        </div>
        <p>You choose {this.state.playerOne} and computer chose {this.state.playerTwo}!</p>
        <p id="message" className="selectWinner">{this.state.selectWinner}</p>


      </>
    )
  }
}

export default App;