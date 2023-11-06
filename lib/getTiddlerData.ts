import slugifyTitle from './slugifyTitle';

export default async function getTiddlerData() {
  const res = await fetch('https://neotw.oeyoewl.top/markdown.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: Tiddler[] = await res.json();
  return data.map((tiddler) => ({
    ...tiddler,
    slug: slugifyTitle(tiddler.title),
  }));
}
