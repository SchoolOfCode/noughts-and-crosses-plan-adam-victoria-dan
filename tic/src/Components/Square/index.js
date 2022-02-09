import React, { useState } from "react";
import "./style.css";

function Square({ value, handleBoard, symbol, boardValue }) {
  const [squareSymbol, setSquareSymbol] = useState("");

  function handleClick(symbol) {
    if (boardValue[value] === null) {
      setSquareSymbol(symbol);
    }
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            handleBoard(value);
            handleClick(symbol);
          }}
        >
          {squareSymbol}
        </button>
      </div>
    </div>
  );
}

export default Square;
