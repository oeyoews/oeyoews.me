import Link from 'next/link';

import getTiddlerData from '@/lib/getTiddlerData';

export default async function Page() {
  const data: Tiddler[] = await getTiddlerData();

  const tiddlers = data
    .sort((a, b) => (a.created > b.created ? -1 : 1))
    .map(({ title, slug }) => {
      return (
        <li key={title}>
          <Link href={`/tiddlers/${slug}`}>{title.replace(/\//g, '-')}</Link>
        </li>
      );
    });

  return (
    <div className="prose prose-indigo max-w-none">
      <ul>{tiddlers}</ul>
    </div>
  );
}
