import CalendarHeatmapComponent from '@/components/CalendarPost';
import TiddlersList from '@/components/TiddlersList';

import getTiddlerData from '@/lib/getTiddlerData';

export default async function TiddlersHomepage() {
  const tiddlers = await getTiddlerData();
  return (
    <>
      <CalendarHeatmapComponent datas={tiddlers} />
      <TiddlersList tiddlers={tiddlers} />
    </>
  );
}
