import React from "react";

const Score = (props) => {
  return(
    <h4 id="scoreboard">
      <span>Player Score {props.playerScore}</span>
      <span> - </span>
      <span>{props.computerScore} Computer Score</span>
    </h4>
  )
}

export default Score;