import React from "react";
import "./style.css";

function Square({ value, handleBoard }) {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            handleBoard(value);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Square;
