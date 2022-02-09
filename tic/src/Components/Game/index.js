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

  const [symbol, setSymbol] = useState("O");

  const [winner, setWinner] = useState("");

  function handleBoard(index) {
    if (boardValue[index] === null) {
      const updateBoard = [...boardValue];

      if (playerTurn === "Player 1") {
        setSymbol("X");
      } else {
        setSymbol("O");
      }

      updateBoard[index] = symbol;
      setBoardValue(updateBoard);
      checkWinner();
      togglePlayer(playerTurn);
      console.log(boardValue);
    }
  }

  function togglePlayer(player) {
    if (player === "Player 1") {
      setPlayerTurn("Player 2");
    }
    if (player === "Player 2") {
      setPlayerTurn("Player 1");
    }
  }

  function checkWinner() {
    if (boardValue[0] && boardValue[1] === boardValue[2]) {
      setWinner(playerTurn);
    }
  }

  return (
    <div className="game">
      <Board
        handleBoard={handleBoard}
        playerTurn={playerTurn}
        symbol={symbol}
        boardValue={boardValue}
      />
      <h3>Player turn: {playerTurn}</h3>
      <h3>Winner: {winner}</h3>
    </div>
  );
}

export default Game;
