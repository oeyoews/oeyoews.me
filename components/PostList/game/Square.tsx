interface SquareProps {
	value: number | JSX.Element;
	onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
	return (
		<button className="border border-white font-bold w-16 h-16" onClick={onSquareClick}>
			{value}
		</button>
	);
}

export default Square;