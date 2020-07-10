import React from "react";
import scissors from "../images/scissors.png";
import rock from "../images/rock.png";
import paper from "../images/paper.png";


const PlayerCard = (symbol) => {
  return (
    <div className="player">
    <img className="player-image"
    src={
      symbol === "rock" ? rock : symbol === "scissors" ? scissors : paper
    }
     alt="rock paper scissor"
    />
    </div>
  )
}
export default PlayerCard;