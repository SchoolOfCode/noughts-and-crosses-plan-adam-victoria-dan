import React from "react";
import "./style.css";
import Square from "../Square";

function Board({ handleBoard }) {
  return (
    <div className="board">
      <h1>Board</h1>
      <div className="row-1">
        <Square
          onClick={() => {
            handleBoard(0);
          }}
        />
        <Square
          onClick={() => {
            handleBoard(1);
          }}
        />
        <Square
          onClick={() => {
            handleBoard(2);
          }}
        />
      </div>
      <div className="row-2">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row-3">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
