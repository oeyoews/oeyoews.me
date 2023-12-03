import { FaRegDotCircle } from 'react-icons/fa';

export default function Dot() {
  return (
    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[13px]">
      <FaRegDotCircle className="h-4 w-4 text-gray-300/80 duration-300 transition-all group-hover:text-[#8bc34a] group-hover:scale-105" />
    </span>
  );
}
