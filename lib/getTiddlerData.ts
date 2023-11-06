import formattedTime from './formattedTime';

import md5 from 'md5';

const TidderJsonFile =
  process.env.NEXT_PUBLIC_TiddlerJsonFile ||
  'https://neotw.vercel.app/markdown.json';

export default async function getTiddlerData(tiddlerjsonfile = TidderJsonFile) {
  const res = await fetch(tiddlerjsonfile, {
    cache: 'force-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  console.log('连接成功', tiddlerjsonfile);
  const data: Tiddler[] = await res.json();
  return data.map((tiddler) => ({
    ...tiddler,
    slug: md5(tiddler.title),
    date: formattedTime(tiddler.created),
  }));
}
