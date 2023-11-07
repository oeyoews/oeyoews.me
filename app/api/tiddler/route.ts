// @usage
// fetch('/api/tiddler')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

export async function GET(request: Request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return Response.json(data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
