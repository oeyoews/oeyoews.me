import CalendarHeatmapComponent from '@/components/CalendarPost';
import TiddlersList from '@/components/TiddlersList';

import getTiddlerJsonData from '@/lib/getTiddlerJsonData';

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
