export function customFetch(
  url: string,
  options?: RequestInit,
): Promise<Response> {
  const baseurl = process.env.TIDDLYWIKI_HOST;
  const defaultOptions: RequestInit = {
    mode: 'cors',
    next: { revalidate: 3600 },
    headers: { 'Content-Type': 'application/json' },
  };
  const mergedOptions: RequestInit = { ...defaultOptions, ...options };
  return fetch(`${baseurl}${url}`, mergedOptions);
}
