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
    const updateBoard = [...boardValue];
    updateBoard[index] = "Place Holder";
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
