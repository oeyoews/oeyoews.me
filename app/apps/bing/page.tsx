import { Suspense } from 'react';

import { Metadata } from 'next';

import BingImage from '@/components/BingImage';
import Fancybox from '@/components/Fancybox';

import getBingImages from '@/lib/Bing';

export const revalidate = 600000;

export const metadata: Metadata = {
  title: 'Bing Images',
  description: 'Bing Images',
};

function page() {
  const data = getBingImages();
  return (
    <Fancybox>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-4">
        {data.map(({ url, title, copyright, startdate }, index) => (
          <Suspense fallback={<div>Loading...</div>} key={url}>
            <BingImage
              url={url}
              title={title}
              copyright={copyright}
              startdate={startdate}
              className={`${
                index === 0 || index === data.length - 1 ? 'lg:col-span-2' : ''
              }`}
            />
          </Suspense>
        ))}
      </div>
    </Fancybox>
  );
}

export default page;
