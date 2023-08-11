import { use } from 'react';

function getBingImages() {
  const res = use(
    fetch(
      'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=9&mkt=zh-cn',
      {
        cache: 'no-store',
      },
    ),
  );
  const data: BingImage = use(res.json());
  return data.images;
}

export default getBingImages;
