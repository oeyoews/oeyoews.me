import { lazy } from 'react';

import type { Metadata } from 'next';

import getTiddlerData from '~app/lib/getTiddlerData';
import FirstLoading from '~app/ui/FirstLoading';
import TiddlersList from '~app/ui/TiddlyWiki/TiddlersList';

const CalendarHeatmapComponent = lazy(() => import('~app/ui/CalendarPost'));

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
      {/* 总是丢失 似乎是由于 async */}
      {/* <CalendarHeatmapComponent datas={tiddlersMetadata} /> */}
      <FirstLoading />
      <TiddlersList tiddlers={tiddlersMetadata} />
    </>
  );
}
