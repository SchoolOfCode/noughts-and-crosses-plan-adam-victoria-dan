import React from 'react'
import "./style.css"
import Board from '../Board'

function Game() {
  return (
    <div className='game'>
        <Board />
    <h3>Player turn: X</h3>
    <h3>Winner: X</h3>
    </div>

  )
}

export default Game