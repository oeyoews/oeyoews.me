import { FcApproval } from "react-icons/fc";

function YearHeader({ postYear }) {
	return (
		<li className="text-xs" key={`year-header-${postYear}`}>
			<span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
				<FcApproval className="h-4 w-4 text-gray-400 duration-300 transition-all group-hover:stroke-indigo-500" />
			</span>
			<h2 className="ml-6 text-neutral-200/80 font-serif">{postYear}</h2>
		</li>
	);
}

export default YearHeader