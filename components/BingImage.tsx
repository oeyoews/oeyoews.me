import Image from 'next/image';

import getBase64 from '@/lib/getLocalBase64';

export default async function BingImage(props: BingData) {
  const { url, title, copyright } = props;
  const src = `https://bing.com${url}`;
  const blurData = await getBase64(src);
  return (
    <Image
      src={src}
      alt={title}
      data-fancybox="gallery"
      data-caption={`${title} | ${copyright}`}
      title={title}
      placeholder="blur"
      blurDataURL={blurData}
      width={1920}
      height={1080}
      className="rounded-lg shadow-lg aspect-video cursor-pointer"
    />
  );
}
