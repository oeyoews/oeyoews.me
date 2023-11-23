import type { Metadata } from 'next';

import getTiddlerData from '~lib/getTiddlerData';
import TiddlersList from '~ui/TiddlyWiki/TiddlersList';

export function generateMetadata(): Metadata {
  return {
    title: 'online Tiddlers',
    description: 'online tiddlers',
  };
}

export default async function TiddlersHomepage() {
  const { tiddlersMetadata } = await getTiddlerData();
  return (
    <>
      <TiddlersList tiddlers={tiddlersMetadata} />
    </>
  );
}
