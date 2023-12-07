import TiddlersList from '~components/TiddlyWiki/TiddlersList';
import getTiddlerData from '~lib/getTiddlerData';
import config from '~site/config';

export const metadata = {
  title: 'online tiddlers',
  description: 'online tiddlers',
};

export default async function TiddlersHomepage({
  searchParams,
}: {
  searchParams: { list: number };
}) {
  const { tiddlersMetadata } = await getTiddlerData(config.journalJson);

  return <TiddlersList tiddlers={tiddlersMetadata} route="journal" />;
}
