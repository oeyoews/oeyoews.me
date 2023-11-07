import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import Tiddler from '@/components/Tiddler';

import getTiddlerData from '@/lib/getTiddlerData';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const tiddlers: Tiddler[] = await getTiddlerData();
  const tiddler = tiddlers.find((tiddler) => tiddler.slug === slug);
  return {
    title: tiddler?.title,
    description: tiddler?.description,
  };
}

export async function generateStaticParams() {
  const tiddlers = await getTiddlerData();

  return tiddlers.map((tiddler) => ({
    slug: tiddler.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data: Tiddler[] = await getTiddlerData();

  const tiddler = data.filter((tiddler) => tiddler.slug === slug)[0];
  if (!tiddler) {
    return notFound();
  }

  return (
    <>
      <Tiddler {...tiddler} />
    </>
  );
}
