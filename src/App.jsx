import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Header } from "semantic-ui-react";
import Score from "./components/Score";

const symbols = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: [],
    computer: [],
    selectWinner: [],
    playerScore: 0,
    computerScore: 0,
  };

  startGame = (event) => {
    const playerOne = event.target.id;
    const computer = symbols[Math.floor(Math.random() * symbols.length)];
    const selectWinner = this.selectWinner(playerOne, computer);
    this.setState({
      playerOne: playerOne,
      computer: computer,
      selectWinner: selectWinner,
    });
  };

  selectWinner = (playerOne, computer) => {
    if (playerOne === computer) {
      return `You have chosen ${playerOne} and computer has chosen ${computer}! It's a draw!`;
    } else if (
      (playerOne === "rock" && computer === "scissors") ||
      (playerOne === "scissors" && computer === "paper") ||
      (playerOne === "paper" && computer === "rock")
    ) {
      this.setState({ playerScore: this.state.playerScore + 1 });
      return `You have chosen ${playerOne} and computer has chosen ${computer}! Player One Wins!`;
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 });
      return `You have chosen ${playerOne} and computer has chosen ${computer}! Computer Wins!`;
    }
  };

  render() {
    return (
      <>
        <Header size="huge">
          <h1>Rock Paper Scissors</h1>
          <Header.Subheader>
            <h2>Play a quick game of rock paper scissors!</h2>
          </Header.Subheader>
        </Header>
        <div>
          <Button id="rock" color='blue' onClick={this.startGame}>
            Rock
          </Button>
          <Button id="paper" color='blue' onClick={this.startGame}>
            Paper
          </Button>
          <Button id="scissors" color='blue' onClick={this.startGame}>
            Scissors
          </Button>
        </div>
        <Header size="small">
          <p id="message" className="selectWinner">
            {this.state.selectWinner}
          </p>
        </Header>

        <h3 id="scoretitle">Scoreboard</h3>
        <div id="scoreboard">
          <Score
            playerScore={this.state.playerScore}
            computerScore={this.state.computerScore}
          />
        </div>
      </>
    );
  }
}

export default App;
