import { useState} from 'react'
import "./style.css"
import Board from '../Board'

function Game() {
    const [boardValue, setBoardValue] = useState([null,null,null,null,null,null,null,null,null])
    const [playerTurn, setPlayerTurn] = useState("Player 1")
  return (
    <div className='game'>
        <Board />
    <h3>Player turn: X</h3>
    <h3>Winner: X</h3>
    </div>

  )
}

export default Game