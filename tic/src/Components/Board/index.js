import React from "react";
import "./style.css";
import Square from "../Square";

function Board({ handleBoard, playerTurn, symbol, boardValue }) {
  return (
    <div className="board">
      <h1>Board</h1>
      <div className="row-1">
        <Square
          value={0}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
        <Square
          value={1}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
        <Square
          value={2}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
      </div>
      <div className="row-2">
        <Square
          value={3}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
        <Square
          value={4}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
        <Square
          value={5}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
      </div>
      <div className="row-3">
        <Square
          value={6}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
        <Square
          value={7}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
        <Square
          value={8}
          handleBoard={handleBoard}
          playerTurn={playerTurn}
          symbol={symbol}
          boardValue={boardValue}
        />
      </div>
    </div>
  );
}

export default Board;
