import Icon from '../Icon';

function YearHeader({ postYear }: { postYear: number }) {
  return (
    <li className="text-xs" key={`year-header-${postYear}`}>
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 bg-white">
        <Icon
          icon="gg:check-o"
          className="h-4 w-4 duration-300 transition-all text-[#8bc34a]"
        />
      </span>
      <h2 className="ml-6 text-neutral-300 font-extrabold font-serif">
        {postYear}
      </h2>
    </li>
  );
}

export default YearHeader;
