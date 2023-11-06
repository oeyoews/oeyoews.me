import { notFound } from 'next/navigation';

import Tiddler from '@/components/Tiddler';

import getTiddlerData from '@/lib/getTiddlerData';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data: Tiddler[] = await getTiddlerData();

  const tiddler = data.filter((tiddler) => tiddler.slug === slug)[0];
  if (!tiddler) {
    return notFound();
  }

  return <Tiddler {...tiddler} />;
}
