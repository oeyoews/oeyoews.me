const createURL = (url: string) => {
  const baseurl = process.env.TIDDLYWIKI_HOST;
  return `${baseurl}${url}`;
};

const options = {
  next: {
    revalidate: 3600,
  },
};

export const getTiddlywikiStatus = async () => {
  const res = await fetch(createURL('/status'), options);
  const tiddlywikistatus: ITiddlywikiStatus = await res.json();
  return tiddlywikistatus;
};

export const getAllTiddlers = async () => {
  const res = await fetch(createURL('/recipes/default/tiddlers.json'), options);
  const tiddlers: Tiddler[] = await res.json();
  return tiddlers;
};
