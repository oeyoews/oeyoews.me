export const GET = (request: Request) => {
  const json = {
    hello: 'world',
  };
  const headers = {
    'content-type': 'application/json',
  };
  return new Response(JSON.stringify(json), {
    headers,
  });
};
