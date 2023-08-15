import Image from 'next/image';

import image from '../public/avatar.png';

function Gravatar() {
  return (
    <Image
      src={image}
      alt="oeyoews"
      className="rounded-full w-4 h-4 align-middle mt-0.5"
      title="oeyoews"
      // placeholder="blur"
      priority
    />
  );
}

export default Gravatar;
