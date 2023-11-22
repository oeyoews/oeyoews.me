import md5 from 'md5';
import { create } from '~lib/fetch';
import formattedTime from '~lib/formattedTime';

const TidderJsonFile =
  process.env.TiddlerJsonFile || 'https://neotw.vercel.app/tiddlers.json';

export default async function getTiddlerData(tiddlerjsonfile = TidderJsonFile) {
  const fetch = create(tiddlerjsonfile);
  const res = await fetch({
    options: {
      next: {
        revalidate: 3600,
      },
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TiddlerVanillaMetadata[] = await res.json();
  const tiddlers: Tiddler[] = data
    .filter(
      ({ type }) =>
        type === 'text/markdown' || type === 'text/vnd.tiddlywiki' || !type,
    )
    .map((tiddler) => ({
      ...tiddler,
      slug: md5(tiddler.title),
      date: formattedTime(tiddler.created),
    }))
    .sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });

  const tiddlersMetadata: TiddlerMetadata[] = tiddlers.map(
    ({ text, ...metadata }) => metadata,
  );
  return {
    tiddlers,
    tiddlersMetadata,
  };
}
