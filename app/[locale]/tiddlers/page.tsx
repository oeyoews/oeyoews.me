import { getScopedI18n } from '~app/locales/server';
import TiddlersList from '~components/TiddlyWiki/TiddlersList';
import getTiddlerData from '~lib/getTiddlerData';

export const metadata = {
  title: 'online tiddlers',
  description: 'online tiddlers',
};

export default async function TiddlersHomepage() {
  const { tiddlersMetadata } = await getTiddlerData();
  const scopedT = await getScopedI18n('Tiddler');
  return (
    <>
      <p>{scopedT('desc')}</p>
      <TiddlersList tiddlers={tiddlersMetadata} />
    </>
  );
}
