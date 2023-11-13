import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import getTiddlerJsonData from '@/app/lib/getTiddlerJsonData';
import Tiddler from '@/app/ui/TiddlyWiki/Tiddler';

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
  // @ts-ignore
  const { title, description } = getTiddler(slug);
  return {
    title,
    description,
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
