'use client';

import { useState } from 'react';

import confetti from 'canvas-confetti';
import sound from 'use-sound';

// 支持双击撤回
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
      className="border border-gray-100 font-bold w-16 h-16"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [play] = sound('/sounds/menu-open.mp3');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [hasWinner, setHasWinner] = useState<null | boolean>(null);
  const winner = calculateWinner(squares);
  function handleRestart() {
    setSquares(Array(9).fill(null)); // 重置方块内容
    setXIsNext(true); // 重置下一个玩家
    setHasWinner(null);
  }

  let status;

  if (winner) {
    confetti();
    status = '游戏结束 Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i: number) {
    play();
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
    if (!nextSquares.includes(null) && !winner) {
      // 点击后重新渲染组件, 所以这个status, 在重新计算的时候被覆盖了, 重新渲染的时候, 这个函数没有被触发, 除非手动调用(不合适)
      // status = !winner + '平局';
      setHasWinner(false);
    }
  }

  function renderSquare(i: number) {
    return (
      <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
    );
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-48 h-48 bg-black text-white">
        {Array.from({ length: 3 }, (_, row) => (
          <div key={row} className="h-16 flex">
            {Array.from({ length: 3 }, (_, col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
      <div className="my-4">{status}</div>
      <button className="bg-black text-white px-2" onClick={handleRestart}>
        重新游戏
      </button>
      <div className="inline-block mx-2">
        {hasWinner === false && (
          <div className="px-2 bg-black text-white">平局</div>
        )}
      </div>
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
