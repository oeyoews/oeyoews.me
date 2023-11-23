import type { Metadata } from 'next';

import TiddlersList from '~components/TiddlyWiki/TiddlersList';
import getTiddlerData from '~lib/getTiddlerData';

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
