import { Suspense } from 'react';

import { Metadata } from 'next';

import BingImage from '@/components/BingImage';
import Fancybox from '@/components/Fancybox';

import getBingImages from '@/lib/Bing';

export const metadata: Metadata = {
  title: 'Bing Images',
  description: 'Bing Images',
};

function page() {
  const urls = getBingImages();
  return (
    <Fancybox>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 m-8">
        {urls.map(({ url }) => (
          <Suspense fallback={<div>Loading...</div>} key={url}>
            <BingImage url={url} />
          </Suspense>
        ))}
      </div>
    </Fancybox>
  );
}

export default page;
