import React from "react";

const Score = (props) => {
  return(
    <h4 id="currentscore">
      <span>{props.playerScore}</span>
      <span>{props.computerScore}</span>
    </h4>
  )
}

export default Score;