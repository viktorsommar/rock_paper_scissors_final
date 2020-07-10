import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import 'semantic-ui-css/semantic.min.css'
import { Button, Header, Icon } from 'semantic-ui-react';


const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: symbols[0],
    playerTwo: symbols[0],
    winner: ""
  }

  startGame = () => {
    let count = 0;
    let gameInterval = setInterval(() => {
      count++;
      this.setState({
        playerTwo: symbols[Math.floor(Math.random() * symbols.length)],
        winner: ""
      })
      if(count > 5) {
        clearInterval(gameInterval)
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100)
  }

  selectWinner = () => {
    const {playerOne, playerTwo} = this.state;
    
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

  selectSymbol = (symbol) => {
    this.setState({
      playerOne: symbol,
      winner: ""
    })
  }

  render() {
    const {playerOne, playerTwo, winner} = this.state;
    return (
      <>
      <Header as='h2' icon>
          Rock Paper Scissors
        <Header.Subheader>
          Play a quick game of rock paper scissors!
        </Header.Subheader>
      </Header>

        <div>
          <PlayerCard symbol={playerOne} />
          <PlayerCard symbol={playerTwo} />

        </div>
        <div>
          <Button className="symbolBtn" onClick={() => this.selectSymbol("rock")}>rock</Button>
          <Button className="symbolBtn" onClick={() => this.selectSymbol("paper")}>paper</Button>{" "}
          <Button className="symbolBtn" onClick={() => this.selectSymbol("scissors")}>scissors</Button>
        </div>
        <p id="message" className="winner">{this.state.winner}</p>

        <Button type="button" id="play" onClick={this.startGame}>Start</Button>
      </>
    )
  }
}

export default App;