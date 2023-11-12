import { type Metadata } from 'next';

import getTiddlerData from '@/app/lib/getTiddlerData';
import CalendarHeatmapComponent from '@/app/ui/CalendarPost';
import Scene from '@/app/ui/Scene';
import TiddlersList from '@/app/ui/TiddlersList';

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
      <Scene />
      <CalendarHeatmapComponent datas={tiddlersMetadata} />
      <TiddlersList tiddlers={tiddlersMetadata} />
    </>
  );
}
