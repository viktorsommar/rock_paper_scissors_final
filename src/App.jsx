import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button, Header } from 'semantic-ui-react';


const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: [],
    computer: [],
    selectWinner: []
  }

  startGame = (event) => {
    const playerOne = event.target.id;
    const computer = symbols[Math.floor(Math.random() * symbols.length)]
    const selectWinner = this.selectWinner(playerOne, computer)
    this.setState({
      playerOne: playerOne,
      computer: computer,
      selectWinner: selectWinner
    })
  }

  selectWinner = (playerOne, computer) => {
    if(playerOne === computer) {
      return  "It's a draw!"
    } else if (
      (playerOne === "rock" && computer === "scissors") || 
      (playerOne === "scissors" && computer === "paper") || 
      (playerOne === "paper" && computer === "rock")
    ) {
      return "Player One Wins!"
    } else {
      return "Computer Wins!"
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
        <p>You choose {this.state.playerOne} and computer chose {this.state.computer}!</p>
        <p id="message" className="selectWinner">{this.state.selectWinner}</p>


      </>
    )
  }
}

export default App;