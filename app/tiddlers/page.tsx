import Link from 'next/link';

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
    .map(({ title }) => {
      return (
        <>
          <li>
            <Link href={`/tiddlers/${title}`}>{title}</Link>
          </li>
        </>
      );
    });

  return (
    <div className="prose prose-indigo max-w-none">
      <ul>{tiddlers}</ul>
    </div>
  );
}
