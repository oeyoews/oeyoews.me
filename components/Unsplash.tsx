import Image from 'next/image';

import getBase64 from '@/lib/getLocalBase64';
import { createApi } from 'unsplash-js';

export default async function Unsplash({ slug = 'alpine' }: Params) {
  const UnsplashApiClient = createApi({
    accessKey: process.env.UNSPLASH_API_KEY as string,
  });
  const res = await UnsplashApiClient.search.getPhotos({
    query: slug,
    orientation: 'landscape',
    page: 1,
    perPage: 10,
    // orderBy: 'latest',
  });

  const result = res.response?.results[0];
  if (!result) return;

  const src: string = result.urls.full;
  const alt = result.description as string;
  const blurData = await getBase64(src);
  return (
    // <div className="">
    <Image
      src={src}
      // alt 有时alt 为空
      alt={alt || slug}
      width={1980}
      height={960}
      placeholder="blur"
      blurDataURL={blurData}
      data-fancybox="gallery"
      data-caption={alt || slug}
      className="rounded-lg shadow-lg aspect-video cursor-pointer"
      priority
    />
    //   {alt}
    // </div>
  );
}
