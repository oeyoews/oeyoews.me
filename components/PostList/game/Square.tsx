import Flag from "./Flag";

interface SquareProps {
	value: number | JSX.Element;
	onSquareClick: () => void;
}

// TODO: support mouse hover to prevew next square
// 需要追踪每一个button的状态
function Square({ value, onSquareClick }: SquareProps) {
	return (
		<button className="group border border-white font-bold w-16 h-16" onClick={onSquareClick}>
			{value}
			{/* <div className="group-hover:scale-100 scale-0 transition-all duration-400 hidden group-hover:inline">
				<Flag color="white" />
			</div> */}
		</button>
	);
}

export default Square;