import { type Metadata } from 'next';

import CalendarHeatmapComponent from '@/components/CalendarPost';
import TiddlersList from '@/components/TiddlersList';

import getTiddlerJsonData from '@/lib/getTiddlerJsonData';

export function generateMetadata(): Metadata {
  return {
    title: 'local Tiddlers',
    description: 'local tiddlers',
  };
}

export default async function TiddlersHomepage() {
  const tiddlers = await getTiddlerJsonData();
  return (
    <>
      {/* @ts-ignore */}
      <CalendarHeatmapComponent datas={tiddlers} />
      {/* @ts-ignore */}
      <TiddlersList tiddlers={tiddlers} />
    </>
  );
}
