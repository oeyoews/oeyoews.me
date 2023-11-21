import { type Metadata } from 'next';

import getTiddlerJsonData from '~lib/getTiddlerJsonData';
import CalendarHeatmapComponent from '~ui/CalendarPost';
import TiddlersList from '~ui/TiddlyWiki/TiddlersList';

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
