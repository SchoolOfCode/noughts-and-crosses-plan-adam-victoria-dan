import React from 'react'
import "./style.css"
import Square from '../Square'

function Board() {
  return (
    <div className='board'>
        <h1>Board</h1>
   <div className='row-1'>
    <Square />
    <Square />
    <Square />
    </div>
    <div className='row-2'>
    <Square />
    <Square />
    <Square /> 
    </div>
   <div className='row-3'> 
    <Square />
    <Square />
    <Square />
    </div>
    </div>
  )
}

export default Board