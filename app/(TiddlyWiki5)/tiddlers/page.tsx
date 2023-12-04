import TiddlersList from '~components/TiddlyWiki/TiddlersList';
import getTiddlerData from '~lib/getTiddlerData';

export const metadata = {
  title: 'online tiddlers',
  description: 'online tiddlers',
};

export default async function TiddlersHomepage() {
  const { tiddlersMetadata } = await getTiddlerData();
  return <TiddlersList tiddlers={tiddlersMetadata} route="tiddlers" />;
}
