import { type Metadata } from 'next';

import CalendarHeatmapComponent from '@/components/CalendarPost';
import TiddlersList from '@/components/TiddlersList';

import getTiddlerData from '@/lib/getTiddlerData';

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
      <CalendarHeatmapComponent datas={tiddlersMetadata} />
      <TiddlersList tiddlers={tiddlersMetadata} />
    </>
  );
}
