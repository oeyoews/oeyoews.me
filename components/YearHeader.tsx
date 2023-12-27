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
  'pig'
];

function YearHeader({ postYear }: { postYear: number }) {
  const animal = (postYear - 4) % 12;

  return (
    <div className='pb-4'>
      <div className='text-2xl mt-0 ml-4 select-none text-neutral-300 dark:text-neutral-800 font-extrabold font-serif'>
        {postYear}
        <Icon icon={`noto:${zodiacs[animal]}`} className='mx-2' />
      </div>
    </div>
  );
}

export default YearHeader;
