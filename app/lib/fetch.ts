type Config = {
  url: string;
  options?: RequestInit;
};

function customFetch(url: string, options?: RequestInit): Promise<Response> {
  const defaultOptions: RequestInit = {
    mode: 'cors',
    next: { revalidate: 3600 },
    headers: { 'Content-Type': 'application/json' },
  };
  const mergedOptions: RequestInit = { ...defaultOptions, ...options };
  return fetch(url, mergedOptions);
}

export const create = (baseURL: string) => {
  return function (config: Config): Promise<any> {
    const { url, options } = config;
    const finalURL = baseURL ? baseURL + url : url;
    return customFetch(finalURL, options);
  };
};
