import React from 'react'
import Square from './Square'

export default function CheckToWin ({ winner, ResetGame }) {
  if (winner === null) return null
  return (
    <section className='winner'>
      <div>
        <h2> {winner === false ? 'Empate' : 'Gano'} </h2>
      </div>
      <header className='win'>
        {winner && <Square>{winner}</Square>}
      </header>
      <footer>
        <button type='button' onClick={ResetGame}>Start Again</button>
      </footer>
    </section>
  )
}
