import { lazy } from 'react';

import type { Metadata } from 'next';

import getTiddlerData from '~lib/getTiddlerData';
import FirstLoading from '~ui/FirstLoading';
import TiddlersList from '~ui/TiddlyWiki/TiddlersList';

const CalendarHeatmapComponent = lazy(() => import('~ui/CalendarPost'));

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
