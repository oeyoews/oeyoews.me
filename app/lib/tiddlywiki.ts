const baseurl = process.env.TIDDLYWIKI_HOST;

function fetcht(url: string, options?: RequestInit): Promise<Response> {
  const defaultOptions: RequestInit = {
    mode: 'cors',
    next: { revalidate: 3600 },
    headers: { 'Content-Type': 'application/json' },
  };
  const mergedOptions: RequestInit = { ...defaultOptions, ...options };

  return fetch(`${baseurl}${url}`, mergedOptions);
}

export const getTiddlywikiStatus = async () => {
  const res = await fetcht('/status');
  const tiddlywikistatus: ITiddlywikiStatus = await res.json();
  return tiddlywikistatus;
};

export const getAllTiddlers = async () => {
  const res = await fetcht('/recipes/default/tiddlers.json');
  const tiddlers: Tiddler[] = await res.json();
  return tiddlers;
};
