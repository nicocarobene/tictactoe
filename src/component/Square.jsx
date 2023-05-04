import React from 'react'

export default function Square ({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard()
  }
  return (
  // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className={`${className}`} onClick={handleClick}>
      {children}
    </div>
  )
}
