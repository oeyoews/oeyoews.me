import md5 from 'md5';
import jsontiddlers from '~/public/tiddlers.json';
import formattedTime from '~lib/formattedTime';

export default function getTiddlerJsonData() {
  return jsontiddlers
    .map((tiddler) => ({
      ...tiddler,
      slug: md5(tiddler.title),
      // @ts-ignore
      date: formattedTime(tiddler.created),
    }))
    .sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });
}
