import { create } from './fetch';

const fetch = create(process.env.TIDDLYWIKI_HOST as string);

export const getTiddlywikiStatus = async () => {
  const res = await fetch({
    url: '/status',
  });
  const tiddlywikistatus: ITiddlywikiStatus = await res.json();
  return tiddlywikistatus;
};

export const getAllTiddlers = async () => {
  const res = await fetch({ url: '/recipes/default/tiddlers.json' });
  const tiddlers: Tiddler[] = await res.json();
  return tiddlers;
};
