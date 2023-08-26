'use client';

import { useState } from 'react';
import Square from './Square';

import calculateWinner from '@/lib/calculateWinner';
import confetti from 'canvas-confetti';
import sound from 'use-sound';
import Flag from './Flag';

// TODO: 如果还剩下一个格子, 自动填充
// TODO: 开始游戏前可以切换黑白棋
// TODO: 支持双击撤回棋子
// TODO: 选择是否开启声音
// 支持高亮连线

export default function Board() {
  const [whiteClick] = sound('/sounds/click01.mp3');
  const [blackClick] = sound('/sounds/click02.wav');

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [hasWinner, setHasWinner] = useState<null | boolean>(null);
  const winner = calculateWinner(squares)?.winner
  const winningLine = calculateWinner(squares)?.winningLine
  // console.log(JSON.stringify(winningLine, null, 2))
  const [start, setStart] = useState(false);
  let status;
  function handleRestart() {
    setSquares(Array(9).fill(null)); // 重置方块内容
    setXIsNext(true); // 重置下一个玩家
    setHasWinner(null);
  }


  if (winner) {
    confetti();
    status = '游戏结束 Winner: ' + winner;
  } else if (hasWinner !== false) {
    status = (
      <div className="bg-yellow-500 px-2 rounded-sm">
        Next: <Flag color={xIsNext ? 'white' : 'black'} />
      </div>
    );
  }

  function handleClick(i: number) {
    // 胜利
    if (winner) {
      return;
    }
    // 平局
    if (hasWinner === false) return;
    // 放置棋子后, 不在响应
    // TODO: UI disable
    if (squares[i] || winner) {
      return;
    }

    xIsNext ? whiteClick() : blackClick();
    const nextSquares = squares.slice();
    nextSquares[i] = <Flag color={xIsNext ? 'white' : 'black'} />;
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
    if (!nextSquares.includes(null) && !winner) {
      // 点击后重新渲染组件, 所以这个status, 在重新计算的时候被覆盖了, 重新渲染的时候, 这个函数没有被触发, 除非手动调用(不合适)
      // status = !winner + '平局';
      // 属性计算??? 不是, 是重新渲染
      // 计算属性使用useMemo, 本质还是useEffect, 引发的重新渲染
      setHasWinner(false);
    }
  }

  function renderSquare(i: number) {
    const isWinningSquare = winningLine && winningLine.includes(i);

    return (
      <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} isWinning={isWinningSquare} />
    );
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-48 h-48 bg-yellow-600 text-white relative rounded-lg" id='square'>
        {!start ? (
          <button
            onClick={() => {
              setStart(true);
              whiteClick();
            }}
            className="absolute inset-0 font-bold hover:text-black transition"
            title="点击开始游戏"
          >
            开始游戏
          </button>
        ) : (
          Array.from({ length: 3 }, (_, row) => (
            <div key={row} className="h-16 flex">
              {Array.from({ length: 3 }, (_, col) =>
                renderSquare(row * 3 + col),
              )}
            </div>
          ))
        )}
      </div>
      <div id='game-status' className='text-center'>
        <div className="my-4">
          {start && status}
        </div>
        <div className="inline-block mx-2">
          {hasWinner === false && !winner && (
            <div className="px-2 bg-black text-white" title='平局'>平局</div>
          )}
        </div>
        {(winner || hasWinner === false) && (
          <button
            className="bg-black text-white px-2 my-1"
            onClick={handleRestart}
            title='点击重新游戏'
          >
            重新游戏
          </button>
        )}</div>
    </div >
  );
}
