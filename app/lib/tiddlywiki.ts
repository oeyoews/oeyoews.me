import { customFetch as fetch } from './fetch';

export const getTiddlywikiStatus = async () => {
  const res = await fetch('/status');
  const tiddlywikistatus: ITiddlywikiStatus = await res.json();
  return tiddlywikistatus;
};

export const getAllTiddlers = async () => {
  const res = await fetch('/recipes/default/tiddlers.json');
  const tiddlers: Tiddler[] = await res.json();
  return tiddlers;
};
