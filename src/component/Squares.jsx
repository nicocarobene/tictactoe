import React from 'react'
import Square from './Square'

export default function Squares ({ board, updateBoard }) {
  return (
    <>
      {board.map((_, index) => {
        return (
          <Square
          // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            index={index}
            updateBoard={() => updateBoard(index)}
          >
            {board[index]}
          </Square>
        )
      })}
    </>
  )
}
