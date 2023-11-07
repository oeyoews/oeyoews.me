import jsontiddlers from '../public/markdown.json';
import formattedTime from './formattedTime';

import md5 from 'md5';

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
