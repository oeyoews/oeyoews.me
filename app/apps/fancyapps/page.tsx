import Image from 'next/image';

import Fancybox from '@/components/Fancybox';

export default function page() {
  return (
    <Fancybox options={{}}>
      <Image
        alt=""
        src="https://lipsum.app/id/64/200x150"
        width={200}
        height={200}
        data-fancybox="gallery"
        className="cursor-pointer"
      />
    </Fancybox>
  );
}
