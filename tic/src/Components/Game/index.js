import { useState } from "react";
import "./style.css";
import Board from "../Board";

function Game() {
  const [boardValue, setBoardValue] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [playerTurn, setPlayerTurn] = useState("Player 1");

  function handleBoard(index) {
    const spreadBoard = [...boardValue];
    const updateBoard = spreadBoard.splice(index, 1, "Place Holder");
    setBoardValue(updateBoard);
    console.log(boardValue);
  }

  return (
    <div className="game">
      <Board handleBoard={handleBoard} />
      <h3>Player turn: {playerTurn}</h3>
      <h3>Winner: X</h3>
    </div>
  );
}

export default Game;
