// @usage
// fetch('/api/tiddler')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

export async function GET(request: Request) {
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const res = await fetch('http://127.0.0.1:8000/status');
  const res = await fetch(
    'https://neotw.oeyoewl.top/library/recipes/library/tiddlers.json',
  );
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
