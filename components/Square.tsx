'use client';

import { useState } from 'react';

// 去除边框厚度
// add sound && confetti
function Square({
  value,
  onSquareClick,
}: {
  value: number;
  onSquareClick: () => void;
}) {
  return (
    <button
      className="border border-gray-900 font-bold w-16 h-16"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i: number) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  function renderSquare(i: number) {
    return (
      <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
    );
  }

  return (
    <div className="w-48 h-48">
      {Array.from({ length: 3 }, (_, row) => (
        <div key={row} className="h-16 flex">
          {Array.from({ length: 3 }, (_, col) => renderSquare(row * 3 + col))}
        </div>
      ))}
      <div className="status">{status}</div>
    </div>
  );
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
