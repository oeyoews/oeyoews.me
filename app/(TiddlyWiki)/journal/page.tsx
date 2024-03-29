import TiddlersList from '~components/TiddlyWiki/TiddlersList';
import config from '~config';
import getTiddlerData from '~lib/getTiddlerData';

export const metadata = {
  title: 'online tiddlers',
  description: 'online tiddlers'
};

export default async function TiddlersHomepage({
  searchParams
}: {
  searchParams: { list: number };
}) {
  const { tiddlersMetadata } = await getTiddlerData(config.journalJson);

  return <TiddlersList tiddlers={tiddlersMetadata} route="/journal" />;
}
