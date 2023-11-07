import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import Tiddler from '@/components/Tiddler';

import getTiddlerJsonData from '@/lib/getTiddlerJsonData';

function getTiddler(slug: string) {
  const tiddlers = getTiddlerJsonData();
  return tiddlers.find((tiddler) => tiddler.slug === slug);
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const { slug } = params;
  const tiddler = getTiddler(slug);
  return {
    title: tiddler?.title,
    description: tiddler?.description,
  };
}

export function generateStaticParams() {
  const tiddlers = getTiddlerJsonData();

  return tiddlers.map((tiddler) => ({
    slug: tiddler.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const tiddler = getTiddler(slug);
  if (!tiddler) {
    return notFound();
  }

  // @ts-ignore
  return <Tiddler tiddler={tiddler} />;
}
