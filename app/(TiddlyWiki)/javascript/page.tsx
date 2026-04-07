import { Divider } from '~components/ArticleComponents';
import Summary from '~components/Summary';
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
    const data = await getTiddlerData(config.jsJson);
    tiddlersMetadata = data.tiddlersMetadata;
  } catch {
    tiddlersMetadata = [];
  }

  return (
    <>
      <Summary
        text="此页面是 TiddlyWiki Starter Kit 的 所有 JavaScript tiddlers"
        header="JavaScript"
      />
      <TiddlersList tiddlers={tiddlersMetadata} route="/javascript" />
    </>
  );
}
