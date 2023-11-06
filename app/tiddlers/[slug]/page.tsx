import Tiddler from '@/components/Tiddler';

async function getData() {
  const res = await fetch('https://neotw.oeyoewl.top/markdown.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data: Tiddler[] = await getData();

  const tiddlers = data
    .sort((a, b) => (a.created > b.created ? -1 : 1))
    .slice(0, 99)
    .map((tiddler) => {
      return <Tiddler {...tiddler} key={tiddler.title} />;
    });

  return tiddlers;
}
