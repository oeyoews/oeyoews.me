import Tiddler from '@/components/Tiddler';

async function getData() {
  const res = await fetch('https://neotw.oeyoewl.top/markdown.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data: Tiddler[] = await getData();

  const tiddler = data.filter((tiddler) => tiddler.title === slug)[0];

  return <Tiddler {...tiddler} key={tiddler.title} />;
}
