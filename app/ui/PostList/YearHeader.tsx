import Icon from '../Icon';

const zodiacs = [
  '🐀',
  '🐂',
  '🐅',
  '🐇',
  '🐉',
  '🐍',
  '🐎',
  '🐑',
  '🐒',
  '🐓',
  '🐕',
  '🐖',
];

function YearHeader({ postYear }: { postYear: number }) {
  const animal = (postYear - 4) % 12;
  return (
    <div className=" border-gray-100/80 border-l-2 pb-4 relative">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[13px] top-1">
        <Icon
          icon="gg:check-o"
          className="h-4 w-4 duration-300 transition-all text-[#8bc34a]"
        />
      </span>
      <h2 className="ml-6 text-neutral-300 font-extrabold font-serif my-0">
        {postYear}
        {zodiacs[animal]}
      </h2>
    </div>
  );
}

export default YearHeader;
