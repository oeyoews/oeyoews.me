import { type Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { notFound } from 'next/navigation';

import getTiddlerData from '~lib/getTiddlerData';
import Tiddler from '~components/TiddlyWiki/Tiddler';

async function getTiddler(slug: string) {
  const { tiddlers } = await getTiddlerData();
  return tiddlers.find((tiddler) => tiddler.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const tiddler = await getTiddler(slug);
  return {
    title: tiddler?.title,
    description: tiddler?.description,
  };
}

export async function generateStaticParams() {
  const { tiddlers } = await getTiddlerData();

  return tiddlers.map((tiddler) => ({
    slug: tiddler.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;
  const tiddler = await getTiddler(slug);
  if (!tiddler) {
    notFound();
  }

  return <Tiddler tiddler={tiddler} />;
}
