import TiddlersList from '~components/TiddlyWiki/TiddlersList';
import getTiddlerData from '~lib/getTiddlerData';

export const metadata = {
  title: 'online tiddlers',
  description: 'online tiddlers'
};

export default async function TiddlersHomepage() {
  let tiddlersMetadata: TiddlerMetadata[] = [];
  try {
    const data = await getTiddlerData();
    tiddlersMetadata = data.tiddlersMetadata;
  } catch {
    tiddlersMetadata = [];
  }

  return <TiddlersList tiddlers={tiddlersMetadata} route="/tiddlers" />;
}
