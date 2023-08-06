// import getBase64 from '@/lib/getLocalBase64';
import { use } from 'react';

import Image, { ImageProps } from 'next/image';

function Imagec({ ...props }: ImageProps) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Image
          src={props.src}
          // className="rounded bg-neutral-100 shadow-lg p-4"
          alt={props.alt}
          width={props.width}
          height={props.height}
          //   placeholder='blur'
          //   blurDataURL={use(getBase64(props.src))}
        />
        <figcaption className="mt-2 text-center uppercase">
          {props.alt}
        </figcaption>
      </div>
    </div>
  );
}

export default Imagec;
