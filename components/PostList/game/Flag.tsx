interface FlagProps {
	color: 'white' | 'black';
}

function Flag({ color }: FlagProps) {
	return (
		<div className={`w-4 rounded-full h-4 bg-${color} align-middle mx-1 inline-block`}></div>
	);
}

export default Flag;