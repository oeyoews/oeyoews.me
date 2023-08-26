export default function calculateWinner(squares: any[]) {
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
    if (
      squares[a] &&
      squares[b] &&
      squares[c] &&
      squares[a].props.color === squares[b].props.color &&
      squares[a].props.color === squares[c].props.color
    ) {
      // return squares[a].props.color;
      return {
        winner: squares[a].props.color,
        winningLine: lines[i], // 返回胜利的颜色和连线
      };
    }
  }

  return null;
}
