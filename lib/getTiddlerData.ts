import formattedTime from './formattedTime';

import md5 from 'md5';

export default async function getTiddlerData() {
  const res = await fetch('https://neotw.oeyoewl.top/markdown.json', {
    cache: 'force-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: Tiddler[] = await res.json();
  return data.map((tiddler) => ({
    ...tiddler,
    slug: md5(tiddler.title),
    date: formattedTime(tiddler.created),
  }));
}
