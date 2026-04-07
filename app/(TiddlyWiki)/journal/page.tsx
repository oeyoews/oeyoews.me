import TiddlersList from '~components/TiddlyWiki/TiddlersList';
import config from '~config';
import getTiddlerData from '~lib/getTiddlerData';

export const metadata = {
  title: 'online tiddlers',
  description: 'online tiddlers'
};

export default async function TiddlersHomepage() {
  let tiddlersMetadata: TiddlerMetadata[] = [];
  try {
    const data = await getTiddlerData(config.journalJson);
    tiddlersMetadata = data.tiddlersMetadata;
  } catch {
    tiddlersMetadata = [];
  }

  return <TiddlersList tiddlers={tiddlersMetadata} route="/journal" />;
}
