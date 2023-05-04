import React, { useState } from 'react'
import './TicTacToe.css'
import Squares from './Squares'
import confetti from 'canvas-confetti'
import CheckToWin from './CheckToWin'
import { TURNS } from '../Constant/Constant'
import { checkWinner, checkEndGame } from '../Utils/CheckToWin'

const INITIAL_VALUE = window.localStorage.getItem('tictactoe') ? JSON.parse(window.localStorage.getItem('tictactoe')) : Array(9).fill(null)

const INITIAL_TURN = window.localStorage.getItem('turn') ? JSON.parse(window.localStorage.getItem('turn')) : TURNS.X

export default function TicTacToe () {
  const [board, setBoard] = useState(INITIAL_VALUE)
  const [turn, setTurn] = useState(INITIAL_TURN)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] !== null || winner) return
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newBoard = [...board]
    // spred operator, rest operetor  y StructuroClone(copia profunda de un array)
    newBoard[index] = turn
    setBoard(newBoard)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(`The champion is ${newWinner}`)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
    window.localStorage.setItem('tictactoe', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
  }

  const ResetGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('tictactoe')
  }

  return (
    <main>
      <h1> TicaTacToe</h1>
      <section className='game'>
        <Squares board={board} updateBoard={updateBoard} />
      </section>
      <section className='turn'>
        <span className={turn === TURNS.X ? 'active' : ''}>X</span>
        <span className={turn === TURNS.O ? 'active' : ''}>O</span>
      </section>
      <CheckToWin ResetGame={ResetGame} winner={winner} />
    </main>
  )
}
