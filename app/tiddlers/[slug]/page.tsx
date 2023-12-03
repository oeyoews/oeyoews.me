import { type Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import clsx from 'clsx';
import { Article, H1 } from '~components/ArticleComponents';
import MarkdownWrapper from '~components/MarkdownWrapper';
import formatTitle from '~lib/formatTitle';
import getTiddlerData from '~lib/getTiddlerData';

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

function Tiddler({ tiddler }: { tiddler: Tiddler }) {
  const { title, text, 'page-cover': pageCover } = tiddler;

  const imageClasses = clsx(
    'rounded-xl object-cover object-center aspect-video h-48 shadow',
  );
  return (
    <Article>
      {pageCover && (
        <Image
          src={pageCover}
          alt={title}
          width={1200}
          height={480}
          className={imageClasses}
        />
      )}
      <H1>{formatTitle(title)}</H1>
      <MarkdownWrapper text={text} />
    </Article>
  );
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;
  const tiddler = await getTiddler(slug);

  if (!tiddler) {
    notFound();
  }

  return <Tiddler tiddler={tiddler} />;
}
