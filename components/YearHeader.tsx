import { FaRegCheckCircle } from 'react-icons/fa';

import Icon from '~components/Icon';
import Timeline from '~components/Timeline';

// const zodiacs = [ '🐀', '🐂', '🐅', '🐇', '🐉', '🐍', '🐎', '🐑', '🐒', '🐓', '🐕', '🐖', ];

const zodiacs = [
  'mouse',
  'ox',
  'tiger',
  'rabbit',
  'dragon',
  'snake',
  'horse',
  'sheep',
  'monkey',
  'rooster',
  'dog',
  'pig',
];

function YearHeader({ postYear }: { postYear: number }) {
  const animal = (postYear - 4) % 12;

  return (
    <div className="border-gray-100/80 border-l-2 pb-4 relative">
      <Timeline.Dot icon={<FaRegCheckCircle />} />
      <div className="text-xl ml-6 select-none text-neutral-300  dark:text-neutral-800 font-extrabold font-serif my-0">
        {postYear}
        <span title={zodiacs[animal]}>
          <Icon icon={`noto:${zodiacs[animal]}`} className="mx-2" />
        </span>
      </div>
    </div>
  );
}

export default YearHeader;
