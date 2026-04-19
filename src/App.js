import React, { useState } from "react"; 
import "./App.css"; 
 
function App() { 
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [isXTurn, setIsXTurn] = useState(true); 
 
  const handleClick = (index) => { 
    if (board[index] || calculateWinner(board)) return; 
 
    const newBoard = [...board]; 
    newBoard[index] = isXTurn ? "X" : "O"; 
    setBoard(newBoard); 
    setIsXTurn(!isXTurn); 
  }; 
 
  const calculateWinner = (b) => { 
    const lines = [ 
      [0,1,2],[3,4,5],[6,7,8], 
      [0,3,6],[1,4,7],[2,5,8], 
      [0,4,8],[2,4,6] 
    ]; 
 
    for (let line of lines) { 
      const [a, b1, c] = line; 
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) { 
        return b[a]; 
      } 
    } 
    return null; 
  }; 
 
  const winner = calculateWinner(board); 
 
  return ( 
    <div className="app"> 
      <h1>Tic Tac Toe</h1> 
 
      <div className="board"> 
        {board.map((cell, index) => ( 
          <button key={index} onClick={() => handleClick(index)}> 
            {cell} 
          </button> 
        ))} 
      </div> 
 
      <h2> 
        {winner ? `Winner: ${winner}` : `Next Player: ${isXTurn ? "X" : 
"O"}`} 
      </h2> 
</div> 
); 
} 
export default App; 