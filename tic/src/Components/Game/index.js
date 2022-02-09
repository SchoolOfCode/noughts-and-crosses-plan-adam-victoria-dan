import { useState, useEffect } from "react";
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
    //   checkWinner();
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

 useEffect(()=> {
     checkWinner() 
    },[boardValue])


  function checkWinner(index) {
  
    const lines = [

        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
     for(let i = 0; i < lines.length; i++){
         const [a,b,c] = lines[i]
         if (boardValue.indexOf(null) === -1){
            // if no more moves game is draw
            setWinner("DRAW")
            return
        } else if (boardValue[a] && boardValue[a] === boardValue[b] && boardValue[a] === boardValue[c]) { 
      setWinner(boardValue[a]);
      return }
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
