import React from "react";

const PlayerCard = ({color, symbol}) => {
  const style = {
    backgroundColor: color,
  }
  return (
    <div style={style} className="player-card">
    </div>
  )
}

export default PlayerCard;